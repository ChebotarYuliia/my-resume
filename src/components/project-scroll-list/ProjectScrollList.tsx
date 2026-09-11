"use client";

import React, { useState } from "react";
import s from "./ProjectScrollList.module.scss";
import classNames from "classnames/bind";
import { InView } from "@/components/in-view/InView";
import { PillProps } from "@/components/pill/Pill";
import { Video } from "@/components/video/Video";

const c = classNames.bind(s);

export type ProjectScrollListItem = {
  title: string;
  text: string;
  pills?: Array<React.ReactElement<PillProps>>;
  media: string;
  mediaFallback?: string;
};

type Props = {
  items: Array<ProjectScrollListItem>;
};

export const ProjectScrollList = ({ items }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  if (!items.length) {
    return null;
  }

  return (
    <div className={s.projectScrollList}>
      <ul className={s.projectScrollList__list}>
        {items.map((item, i) => (
          <InView
            as="li"
            key={item.title}
            className={c(s.projectScrollList__item, {
              isActive: i === hoveredIndex,
            })}
            inClassName={s.inView}
            rootMargin="-20% 0px"
            data-cursor-hover=""
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(i)}
            onFocus={() => setHoveredIndex(i)}
            onBlur={() => setHoveredIndex(i)}
          >
            <h3 className={s.projectScrollList__title}>{item.title}</h3>
            <div className={s.projectScrollList__mediaMobile}>
              <Video
                src={item.media}
                fallbackSrc={item.mediaFallback}
                width={600}
                height={400}
                autoplay={false}
                loop={true}
              />
            </div>
            <div className={s.projectScrollList__textWrap}>
              <p className={s.projectScrollList__text}>{item.text}</p>
            </div>
            {item.pills && (
              <div className={s.projectScrollList__pills}>{item.pills}</div>
            )}
          </InView>
        ))}
      </ul>

      <div className={s.projectScrollList__mediaPanel}>
        {items.map((item, i) => (
          <div
            className={c(s.projectScrollList__media, {
              isActive: i === hoveredIndex,
            })}
            key={item.title}
          >
            <Video
              src={item.media}
              fallbackSrc={item.mediaFallback}
              width={600}
              height={400}
              autoplay={false}
              loop={true}
              active={i === hoveredIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
