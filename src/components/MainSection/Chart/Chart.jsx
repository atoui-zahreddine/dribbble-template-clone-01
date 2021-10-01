import React from "react";
import ReactFlow from "react-flow-renderer";

import {
  CustomNode1,
  CustomNode2,
  CustomNode3,
  CustomNode4,
  CustomNode5,
  CustomNode6,
  CustomNode7,
} from "./Nodes/CustomNode";

const elements = [
    {
        id: "1",
        type: "customNode1",
        position: {x: 50, y: 200},
        style: {
            padding: "20px 40px",
            background: "#EAE9E3",
            borderRadius: "20px",
            textAlign: "center",
            fontFamily: "Helvetica",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
        },
    },

    {
        id: "2",
        style: {
            padding: "20px 40px",
            background: "#EAE9E3",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
        },
        type: "customNode2",
        position: {x: 480, y: 60},
    },

    {
        id: "3",
        style: {
            boxSizing: "content-box",
            padding: "40px 40px",
            background: "white",
            borderRadius: "20px",
            width: "350px",
            textAlign: "center",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
        },
        type: "customNode3",
        position: {x: 400, y: 250},
    },

    {
        id: "4",
        style: {
            boxSizing: "content-box",
            padding: "40px 40px",
            background: "#A6E225",
            borderRadius: "20px",
            width: "350px",
            textAlign: "center",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
        },
        type: "customNode4",
        position: {x: 400, y: 470},
    },

    {
        id: "5",
        style: {
            boxSizing: "content-box",
            padding: "40px 40px",
            background: "white",
            borderRadius: "20px",
            width: "350px",
            textAlign: "center",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
        },
        type: "customNode5",
        position: {x: 400, y: 650},
    },

    {
        id: "6",
        style: {
            boxSizing: "content-box",
            padding: "40px 40px",
            background: "white",
            borderRadius: "20px",
            width: "250px",
            textAlign: "center",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)",
        },
        type: "customNode6",
        position: {x: 950, y: 370},
    },

    {
        id: "7",
        type: "customNode7",
        position: {x: 106, y: 400}
    },

    {
        id: "e1a-2",
        type: "smoothstep",
        source: "1",
        target: "2",
        sourceHandle: "a",
    },
    {
        id: "e2b-3",
        type: "smoothstep",
        source: "2",
        target: "3",
        sourceHandle: "b",
    },
    {
        id: "e3c-4",
        type: "smoothstep",
        source: "3",
        target: "4",
        sourceHandle: "c",
    },
    {
        id: "e4d-5",
        type: "smoothstep",
        source: "4",
        target: "5",
        sourceHandle: "d",
    },
    {
        id: "e5d-6",
        type: "smoothstep",
        source: "5",
        target: "6",
        sourceHandle: "e",
    },
    {
        id: "e1f-7",
        type: "smoothstep",
        source: "1",
        target: "7",
        targetHandle: "a",
        sourceHandle: "f",
    },
    {
        id: "e3j-7",
        type: "smoothstep",
        source: "3",
        target: "7",
        targetHandle: "b",
        sourceHandle: "j",
    },
    {
        id: "e4e-7",
        type: "smoothstep",
        source: "4",
        target: "7",
        targetHandle: "c",
        sourceHandle: "h",
    }
];

const nodeTypes = {
    customNode7: CustomNode7,
    customNode5: CustomNode5,
    customNode6: CustomNode6,
    customNode4: CustomNode4,
    customNode3: CustomNode3,
    customNode2: CustomNode2,
    customNode1: CustomNode1,
};
const graphStyles = {width: "100%", height: "95%", overflowX: "auto", overflowY: "auto"};

const BasicGraph = () => (
    <ReactFlow nodesDraggable={false} minZoom={0} maxZoom={0} nodeTypes={nodeTypes} elements={elements}
               style={graphStyles}/>
);

export default BasicGraph;
