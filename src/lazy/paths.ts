import { $PathsObject } from "../model/LazyOpenApi";
import { PathsObject } from "openapi3-ts";
import path from "./path";

export default (o: $PathsObject | undefined): PathsObject =>
  o
    ? Object.entries(o)
        .map(([k, v]) => ({ [k]: path(v, k) }))
        .reduce((a, b) => ({ ...a, ...b }), {})
    : {};
