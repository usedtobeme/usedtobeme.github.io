import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { BufferGeometry, Mesh, ShaderMaterial } from 'three';
import * as styles from './Background3D.css';

const NoiseBackground = () => {
  const meshRef = useRef<Mesh<BufferGeometry, ShaderMaterial>>(null);

  useFrame((state) => {
    if (meshRef.current?.material) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    void main() {
      vec2 st = vUv * 8.0;
      
      float n = noise(st + uTime * 0.5);
      float n2 = noise(st * 2.0 + uTime * 0.3);
      float n3 = noise(st * 4.0 + uTime * 0.7);
      
      float combinedNoise = (n + n2 * 0.5 + n3 * 0.25) / 1.75;
      
      vec3 purple1 = vec3(0.4, 0.1, 0.8);
      vec3 purple2 = vec3(0.6, 0.2, 1.0);
      vec3 purple3 = vec3(0.8, 0.4, 1.0);
      
      vec3 baseColor = mix(purple1, purple2, combinedNoise);
      
      float glow = smoothstep(0.3, 0.8, combinedNoise);
      vec3 glowColor = purple3 * glow * 0.8;
      
      vec3 finalColor = baseColor + glowColor;
      
      float alpha = 0.3 + combinedNoise * 0.4;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  return (
    <mesh ref={meshRef} scale={[4, 4, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
        }}
        transparent={true}
      />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Canvas
        camera={{ position: [0, 0, 2], fov: 45 }}
        className={styles.canvas}
      >
        <NoiseBackground />
      </Canvas>
    </div>
  );
};

export default Background3D;
