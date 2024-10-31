import { useUiState } from "@/hooks/useUiState";
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const ID = "page-transition-";

export const getCurtains = () => {
  if (typeof window !== "undefined") {
    const curtainOne = document.getElementById(`${ID}0`);
    const curtainTwo = document.getElementById(`${ID}1`);
    const curtainThree = document.getElementById(`${ID}2`);
    const curtainFour = document.getElementById(`${ID}3`);

    return [curtainOne, curtainTwo, curtainThree, curtainFour];
  } else {
    return [];
  }
};

export const usePageAnimationIn = () => {
  const { uiState, setUIState } = useUiState();

  const animate = () => {
    if (!uiState.prefersReducedMotion) {
      const [curtainOne, curtainTwo, curtainThree, curtainFour] = getCurtains();

      if (curtainOne && curtainTwo && curtainThree && curtainFour) {
        const tl = gsap.timeline();

        tl.set([curtainOne, curtainTwo, curtainThree, curtainFour], {
          yPercent: 0,
        }).to([curtainOne, curtainTwo, curtainThree, curtainFour], {
          yPercent: 100,
          stagger: 0.1,
          onComplete: () => {
            setUIState({ openAnimation: "completed" });
          },
        });
      }
    } else {
      setUIState({ openAnimation: "completed" });
    }
  };

  return animate;
};

export const usePageAnimationOut = () => {
  const { uiState, setUIState } = useUiState();
  const [curtainOne, curtainTwo, curtainThree, curtainFour] = getCurtains();

  const animate = (href: string, router: AppRouterInstance) => {
    if (!uiState.prefersReducedMotion) {
      if (curtainOne && curtainTwo && curtainThree && curtainFour) {
        const tl = gsap.timeline();

        tl.set([curtainOne, curtainTwo, curtainThree, curtainFour], {
          yPercent: -100,
        }).to([curtainOne, curtainTwo, curtainThree, curtainFour], {
          onStart: () => {
            setUIState({ openAnimation: "active" });
          },
          yPercent: 0,
          stagger: 0.1,
          onComplete: () => {
            router.push(href);
          },
        });
      }
    }
  };

  return animate;
};
