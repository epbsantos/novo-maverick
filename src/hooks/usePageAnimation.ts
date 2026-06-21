import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export type AnimationType =
  | 'fadeUp'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'rotateIn'
  | 'cascadeCards'
  | 'elastic'
  | 'clipReveal';

interface UsePageAnimationOptions {
  type?: AnimationType;
  selector?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
}

/**
 * Reusable GSAP page-entry animation hook.
 * Attach the returned `containerRef` to the outermost element of your page component.
 */
export function usePageAnimation(options: UsePageAnimationOptions = {}) {
  const {
    type = 'fadeUp',
    selector = '.anim',
    stagger = 0.1,
    delay = 0,
    duration = 0.7,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const targets = containerRef.current.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.killTweensOf(targets);

      switch (type) {
        case 'fadeUp':
          gsap.from(targets, {
            opacity: 0,
            y: 40,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
          });
          break;

        case 'fadeLeft':
          gsap.from(targets, {
            opacity: 0,
            x: -60,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
          });
          break;

        case 'fadeRight':
          gsap.from(targets, {
            opacity: 0,
            x: 60,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
          });
          break;

        case 'scaleIn':
          gsap.from(targets, {
            opacity: 0,
            scale: 0.8,
            duration,
            delay,
            stagger,
            ease: 'back.out(1.4)',
          });
          break;

        case 'rotateIn':
          gsap.from(targets, {
            opacity: 0,
            rotation: -12,
            y: 30,
            duration,
            delay,
            stagger,
            ease: 'power2.out',
          });
          break;

        case 'cascadeCards':
          gsap.from(targets, {
            opacity: 0,
            y: 80,
            duration: duration * 1.2,
            delay,
            stagger: stagger * 1.5,
            ease: 'power4.out',
          });
          break;

        case 'elastic':
          gsap.from(targets, {
            opacity: 0,
            scale: 0,
            rotation: 360,
            duration: duration * 1.5,
            delay,
            stagger,
            ease: 'elastic.out(1, 0.5)',
          });
          break;

        case 'clipReveal':
          gsap.from(targets, {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0,
            duration: duration * 1.3,
            delay,
            stagger,
            ease: 'power3.inOut',
          });
          break;

        default:
          gsap.from(targets, {
            opacity: 0,
            y: 30,
            duration,
            delay,
            stagger,
            ease: 'power2.out',
          });
      }
    },
    { scope: containerRef }
  );

  return containerRef;
}
