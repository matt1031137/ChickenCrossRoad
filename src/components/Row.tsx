import type { Row } from "../types";
import { Forest } from "./Forest";
import { CartLane } from "./CartLane";
import { TruckLane } from "./TruckLane";

type Props = {
    rowIndex: number;
    rowData: Row;
};

export function Row({ rowIndex, rowData }: Props) {
    switch (rowData.type) {
        case "forest": {
            return <Forest rowIndex={rowIndex} rowData={rowData} />;
        }
        case "car":{
            return <CartLane rowIndex={rowIndex} rowData={rowData} />;
        }
        case "truck":{
            return <TruckLane rowIndex={rowIndex} rowData={rowData} />;
        }
    }
}