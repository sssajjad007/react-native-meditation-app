import { digitsEnToFa } from "@persian-tools/persian-tools";
import React, { useEffect, useState, useRef } from "react";
import { Paragraph } from "../Typography";
import { ITimerProps } from "./types";

export function Timer(props: ITimerProps) {
  const { minute, second, onEnd } = props;
  const [timer, setTimer] = useState<number>(second);
  const interval = useRef<NodeJS.Timer>();
  useEffect(() => {
    interval.current = setTimeout(nextTime, 1000);
    if (timer === 0) {
      clearTimeout(interval.current);
      if (onEnd) {
        onEnd();
      }
    }
    return () => {
      if (interval.current) {
        clearTimeout(interval.current);
      }
    };
  }, [timer]);
  useEffect(() => {
    return () => {
      if (interval.current) {
        clearTimeout(interval.current);
      }
    };
  }, []);
  function nextTime() {
    return setTimer(timer - 1);
  }
  function formattedTime() {
    const minute = Math.floor(timer / 60);
    const second = timer % 60;
    if (second < 10) {
      return `۰${digitsEnToFa(second)}`;
    }
    return `${digitsEnToFa(second)}`;
  }
  return <Paragraph {...props}>{formattedTime()}</Paragraph>;
}
