export const WEIGHTED_NODE = 'WEIGHTED_NODE';
export const SIMPLE_NODE = 'SIMPLE_NODE';
export const WALL_NODE = 'WALL_NODE';
export const SOURCE_NODE = 'START_NODE';
export const DESTINATION_NODE = 'DESTINATION_NODE';
export const VISITED_NODE = 'VISITED_NODE';
export const SHORTEST_PATH_NODE = 'SHORTEST_PATH_NODE';
export const VISITED_WEIGHT_NODE = 'VISITED_WEIGHT_NODE';
export const VISITED_WEIGHT_SHORTEST_PATH_NODE = 'VISITED_WEIGHT_SHORTEST_PATH_NODE';

export type NodeType =
    | typeof WEIGHTED_NODE
    | typeof SIMPLE_NODE
    | typeof WALL_NODE
    | typeof SOURCE_NODE
    | typeof DESTINATION_NODE
    | typeof VISITED_NODE
    | typeof SHORTEST_PATH_NODE
    | typeof VISITED_WEIGHT_NODE
    | typeof VISITED_WEIGHT_SHORTEST_PATH_NODE;
