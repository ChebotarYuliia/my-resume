import { UIStateContext } from "@/state/state";
import { useContext } from "react";

export const useUiState = () => {
  return useContext(UIStateContext);
};
