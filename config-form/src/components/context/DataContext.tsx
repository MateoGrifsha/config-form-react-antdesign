import { createContext } from "react";
import { DataObj } from "../../App";

export const DataContext = createContext <DataObj | undefined | null>(null);