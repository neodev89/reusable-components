import React, { HTMLInputTypeAttribute } from "react";

interface rsInputTypes {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  htmlFor: string;
  className?: string;
  classNameInput?: string;
  value: string;
  placeholder?: string;
  ReactNodeLabel: React.ReactNode;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface rsButtonTypes {
    classNameDiv: string;
    classNameBtn1: string;
    ReactNodeBtn: React.ReactNode;
}

export type { rsInputTypes, rsButtonTypes };
