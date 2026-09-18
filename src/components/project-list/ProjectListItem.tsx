"use client";

import React, { useId, useState } from "react";
import { InView } from "../in-view/InView";

import Image from "next/image";
import s from "./ProjectListItem.module.scss";
import { PillProps } from "../pill/Pill";
import classNames from "classnames/bind";

const c = classNames.bind(s);

export type ProjectListContent = {
  children: React.ReactNode;
  image?: { src: string; alt: string; portrait?: boolean };
};

export type ProjectListItemProps = {
  title: string;
  text: string;
  pills?: Array<React.ReactElement<PillProps>>;
  kicker?: string;
  action?: React.ReactElement;
  blocks: Array<React.ReactElement<ProjectListContent>>;
};

export const ProjectListItem = ({
  title,
  text,
  pills,
  kicker,
  action,
  blocks,
}: ProjectListItemProps) => {
  const [active, setActive] = useState(false);
  const id = useId();
  const panelId = `${title}-${id};`;
  return (
    <InView
      as="li"
      key={title}
      className={s.projectListItem}
      inClassName={s.inView}
      rootMargin="-10% 0px"
    >
      <button
        type="button"
        className={c(s.projectListItem__header, { active })}
        onClick={() => setActive((s) => !s)}
        aria-expanded={active}
        aria-controls={panelId}
        id={id}
        data-cursor-hover=""
      >
        <span className={s.projectListItem__headingRow}>
          <h3 className={s.projectListItem__title}>{title}</h3>
          {kicker && (
            <span className={s.projectListItem__kicker}>{kicker}</span>
          )}
        </span>
        <p className={s.projectListItem__text}>{text}</p>
        {pills && <div className={s.projectListItem__pills}>{pills}</div>}
        <span
          className={c(s.projectListItem__toggle, { active })}
          aria-hidden="true"
        />
      </button>

      <div
        className={c(s.projectListItem__panelWrap, { active })}
        id={panelId}
        role="region"
        aria-labelledby={id}
        inert={!active}
      >
        <div className={s.projectListItem__panel}>
          <div className={s.projectListItem__panelInner}>
            {blocks}
            {action}
          </div>
        </div>
      </div>
    </InView>
  );
};

export const ProjectListContent = ({ image, children }: ProjectListContent) => {
  return (
    <div className={s.projectListContent}>
      {image && (
        <div
          className={c(s.projectListContent__imageWrap, {
            portrait: image.portrait,
          })}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={s.projectListContent__image}
          />
        </div>
      )}
      <div className={s.projectListContent__text}>{children}</div>
    </div>
  );
};
