import { atom } from "jotai";

/** @type {import("jotai").PrimitiveAtom<Date | Date[]>} */
export const rentDateAtom = atom(new Date());
