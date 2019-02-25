import Easings from "../easings";
import hagen from "hagen";

hagen.log("CUSTOM", Easings.easeInOut(7)(0.5));
hagen.log("QUART", Easings.easeInQuart(0.5));
