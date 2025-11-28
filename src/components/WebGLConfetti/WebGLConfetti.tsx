import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: [number, number, number];
  size: number;
  life: number;
  decay: number;
}

export interface WebGLConfettiProps {
  isActive: boolean;
  onComplete?: () => void;
}

export function WebGLConfetti({ isActive, onComplete }: WebGLConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>();

  const vertexShaderSource = `#version 300 es
    in vec2 a_position;
    in vec3 a_color;
    in float a_size;
    in float a_rotation;
    
    uniform vec2 u_resolution;
    uniform mat3 u_matrix;
    
    out vec3 v_color;
    out vec2 v_texCoord;
    
    void main() {
      vec2 position = (u_matrix * vec3(a_position, 1.0)).xy;
      vec2 clipSpace = ((position / u_resolution) * 2.0) - 1.0;
      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
      gl_PointSize = a_size;
      v_color = a_color;
    }
  `;

  const fragmentShaderSource = `#version 300 es
    precision mediump float;
    
    in vec3 v_color;
    out vec4 fragColor;
    
    void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      if (dist > 0.5) {
        discard;
      }
      
      float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
      fragColor = vec4(v_color, alpha);
    }
  `;

  const createShader = (gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    
    return shader;
  };

  const createProgram = (gl: WebGL2RenderingContext): WebGLProgram | null => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return null;
    
    const program = gl.createProgram();
    if (!program) return null;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    
    return program;
  };

  const createParticles = (count: number): Particle[] => {
    const particles: Particle[] = [];
    const canvas = canvasRef.current;
    if (!canvas) return particles;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 15 - 5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        color: [
          Math.random(),
          Math.random(),
          Math.random()
        ],
        size: Math.random() * 8 + 4,
        life: 1.0,
        decay: Math.random() * 0.02 + 0.005
      });
    }
    
    return particles;
  };

  const updateParticles = (particles: Particle[]): Particle[] => {
    return particles.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.3; // gravity
      particle.rotation += particle.rotationSpeed;
      particle.life -= particle.decay;
      
      return particle.life > 0 && particle.y < window.innerHeight + 100;
    });
  };

  const render = () => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    const program = programRef.current;
    
    if (!canvas || !gl || !program) return;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    const particles = particlesRef.current;
    if (particles.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    gl.useProgram(program);
    
    // Update uniform
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    
    const matrixLocation = gl.getUniformLocation(program, 'u_matrix');
    gl.uniformMatrix3fv(matrixLocation, false, [1, 0, 0, 0, 1, 0, 0, 0, 1]);

    // Prepare data arrays
    const positions: number[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];
    
    particles.forEach(particle => {
      positions.push(particle.x, particle.y);
      colors.push(...particle.color);
      sizes.push(particle.size * particle.life);
    });

    // Create and bind buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW);
    
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    
    const colorLocation = gl.getAttribLocation(program, 'a_color');
    gl.enableVertexAttribArray(colorLocation);
    gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

    const sizeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.DYNAMIC_DRAW);
    
    const sizeLocation = gl.getAttribLocation(program, 'a_size');
    gl.enableVertexAttribArray(sizeLocation);
    gl.vertexAttribPointer(sizeLocation, 1, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.POINTS, 0, particles.length);
    
    // Update particles for next frame
    particlesRef.current = updateParticles(particles);
    
    animationIdRef.current = requestAnimationFrame(render);
  };

  const initWebGL = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: false });
    if (!gl) {
      console.error('WebGL2 not supported');
      return;
    }

    glRef.current = gl;
    
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const program = createProgram(gl);
    if (!program) return;
    
    programRef.current = program;
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
  };

  useEffect(() => {
    resizeCanvas();
    initWebGL();
    
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isActive && glRef.current && programRef.current) {
      particlesRef.current = createParticles(150);
      render();
    } else {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      particlesRef.current = [];
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}