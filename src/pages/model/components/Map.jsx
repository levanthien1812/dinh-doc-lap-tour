import { loadModules } from "esri-loader";
import React, { useEffect } from "react";

function Map() {
  useEffect(() => {
    loadModules(
      [
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/GeoJSONLayer",
        "esri/layers/SceneLayer",
        "esri/layers/GraphicsLayer",
        "esri/Graphic",
        "esri/request",
        "esri/geometry/Mesh",
        "esri/geometry/Point",
      ],
      { css: true }
    )
      .then(([Map, SceneView, GeoJSONLayer, Graphic, Mesh]) => {
        const background1 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/background1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 7,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //background 3
        const background3 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/background3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#dacdc0",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // roof
        const roof1 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/roof/roof1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.5,
                  material: {
                    color: "#dacdc0",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //roof2
        const roof2 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/roof/roof2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#e9cb8a",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //roof3
        const roof3 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/roof/roof3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.4,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // background2
        const background2 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/background2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#cfcfcf",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //frame
        const frame1 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/frame/frame_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.5,
                  material: {
                    color: "smoke",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const frame2 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/frame/frame_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const frame3 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/frame/frame_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.5,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d_stair
        //lvl1
        const d_side_star = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/d/stair/stair.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //handles right
        const d_star_handle_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/stair/stair_handle_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //handles left
        const d_star_handle_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/stair/stair_handle_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //stair_side-door
        const d_side_door_column = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/side_door/side_door_column.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //side_door_top_1
        const d_side_door_top_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/side_door/side_door_top_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //side_door_top_2
        const d_side_door_top_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/side_door/side_door_top_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.9,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //side_door_top_3
        const d_side_door_top_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/side_door/side_door_top_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d floor 1 room
        const d_floor1_room = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor1/room/room.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 8,
                  material: {
                    color: "smoke",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d floor 1 room
        const d_floor1_room_door = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor1/room/doors.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2.85,
                  material: {
                    color: "brown",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d floor 1 inside columns
        const d_floor1_inside_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor1/columns/insideColumns.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 7,
                  material: {
                    color: "gray",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d floor 1 front columns
        const d_floor1_front_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor1/columns/frontColumns.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5.5,
                  material: {
                    color: "gray",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d floor 1 back columns
        const d_floor1_back_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor1/columns/backColumns.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5.6,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d floor 1 inside columns decor
        const d_floor1_inside_columns_decor = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor1/columns/columnDecor.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "white",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //floor_2_columns
        const d_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/columns/floor2_columns.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 19.3,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //floor_2_side_columns
        const d_floor2_side_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/columns/floor2_side_columns.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 16.3,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //d floor 1 front columns
        const d_floor1_roof_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor1/columns/roofColumn.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "gray",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // side window _ side a
        const d_block123_floor1_a_window_side_window = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor1/a/window/side_window_left_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // window top - bottom - side a
        const d_block123_floor1_a_window_top_bottom = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor1/a/window/window_top_bottom.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // window top - bottom - side d
        const d_block123_floor1_d_window_top_bottom = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor1/d/window/window_top_bottom.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //roof sub edge
        const d_roof_sub_edge1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/roof/roof_sub_edge1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.5,
                  material: {
                    color: "#eae9e9",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_roof_sub_edge1_frame = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/roof/roof_sub_edge1.frame.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.5,
                  material: {
                    color: "#eae9e9",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_roof_sub_edge2_frame_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/roof/roof_sub_edge2_frame_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.5,
                  material: {
                    color: "#eae9e9",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_roof_sub_edge2_frame_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/roof/roof_sub_edge2_frame_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.5,
                  material: {
                    color: "#eae9e9",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_roof_sub_edge2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/roof/roof_sub_edge2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#dacdc0",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // attic
        const d_attic_floor = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL + "/assets/GeoJSON/d/attic/floor1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "white",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_attic_wall1 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/d/attic/wall1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3,
                  material: {
                    color: "white",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_attic_wall2 = new GeoJSONLayer({
          url: process.env.PUBLIC_URL + "/assets/GeoJSON/d/attic/wall2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.4,
                  material: {
                    color: "white",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_attic_roof_frame = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/attic/roof/frame.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "white",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_attic_roof_floor1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/attic/roof/floor1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "grey",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_attic_roof_floor2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/attic/roof/floor2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.5,
                  material: {
                    color: "#e47c5c",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // d_Rèm Hoa Đá bottom
        const d_block45678_floor2_RemHoaDa = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor2_wall_decor/RemHoaDa.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // d_Rèm Hoa Đá top
        const d_block45678_floor2_RemHoaDa_top = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block45678/floor2_wall_decor/RemHoaDa_top.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        // block123 floor 2 wall
        const block123_floor2_wall1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor2/wall1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 12.1,
                  material: {
                    color: "#ffecd4",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const block123_floor2_wall2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor2/wall2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.21,
                  material: {
                    color: "#ffecd4",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const block123_floor2_wall3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor2/wall3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2.42,
                  material: {
                    color: "#ffecd4",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const block123_floor2_window_balcony = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor2/window_balcony.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 121 / 75,
                  material: {
                    color: "white",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const d_block123_floor1_b_window_wall = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/d/block123/floor1/b_window_wall.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const top_roof = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/roof/top_roof.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const block3_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/columns/block3_column.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 25,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const block3_2_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/columns/block3_2_column.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 25,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const top_roof_not_straight = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/roof/top_roof_not_straight.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.1,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const rem_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL + "/assets/GeoJSON/Block3/rem/rem_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const rem_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL + "/assets/GeoJSON/Block3/rem/rem_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const block3_column = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/columns/block3_3_columns.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 19.3,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const ddl_roof = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/roof/top_roof_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const ddl_roof_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/roof/top_roof_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const ddl_roof_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/roof/top_roof_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.3,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const a_side_star = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/stair/stair.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 6.5,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const a_star_handle_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/stair/handle_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const a_star_handle_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/stair/handle_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const a_slope_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/stair/slope_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 6.5,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const a_slope_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/stair/slope_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 6.5,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const a_side_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/stair/side_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#898173",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const a_side_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/Block3/stair/side_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#898173",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //   Mesh.createFromGLTF(
        //     process.env.PUBLIC_URL + "/assets/GeoJSON/d/block45678/floor2_wall_decor/RemHoaDa_top.geojson"
        //   ).then(function (geometry) {
        //     //geometry.scale(0.025, { origin: location_1 });
        //     // rotate it by 90 degrees around the z axis
        //     geometry.rotate(0, 0, 90);
        //     // add it to a graphic
        //     const graphic = new Graphic({
        //       geometry,
        //       symbol: {
        //         type: "mesh-3d", // autocasts as new MeshSymbol3D()
        //         symbolLayers: [
        //           {
        //             type: "fill", // autocasts as new FillSymbol3DLayer()
        //             material: {
        //               color: "gray",
        //             },
        //             size: 1000,
        //           },
        //         ],
        //       },
        //     });
        //     view.graphics.add(graphic);
        //   });

        // c
        const c_stair = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/stair/stair.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.5,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_stair_handle_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/stair/handle_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_stair_handle_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/stair/handle_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block1_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block1_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block1_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block1_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_1_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_1_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_1_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_1_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_1_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_1_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_1_4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_1_4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_2_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_2_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_2_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_2_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_2_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_2_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_5 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_5.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2.5,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_6 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_6.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2.8,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_7 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_7.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.5,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_6_8 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_6_8.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_window_top_bottom_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/window/window_top_bottom_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_window_top_bottom_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/window/window_top_bottom_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_window_top_bottom_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/window/window_top_bottom_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_window_side_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/window/side_window_left_right_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_window_side_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/window/side_window_left_right_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_window_side_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/window/side_window_left_right_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_main_door = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/door/main_door.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5,
                  material: {
                    color: [255, 254, 154, 0.2],
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_2_4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_2_4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_3_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_3_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_3_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_3_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_3_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_3_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_3_4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_3_4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_4_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_4_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_4_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_4_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_4_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_4_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_4_4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_4_4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.2,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_5_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_5_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.7,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_block_5_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/block/block_5_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.7,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_pillars = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/pillars/pillars.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 19.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_pillars2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/pillars/pillars2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "gray",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_pillars_door = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/pillars/pillars_door.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 12.7,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_walls = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/walls/walls.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 12.1,
                  material: {
                    color: "#ffecd4",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_walls2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/walls/walls2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 121 / 75,
                  material: {
                    color: "#white",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_walls3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/walls/walls3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 121 / 75,
                  material: {
                    color: "#white",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_walls4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/walls/walls4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2.42,
                  material: {
                    color: "#ffecd4",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_walls5 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/walls/walls5.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.21,
                  material: {
                    color: "#ffecd4",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_walls6 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/walls/walls6.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 16.3,
                  material: {
                    color: "#ffecd4",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_roof_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/roofs/roof_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_roof_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/roofs/roof_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_roof_left_roof = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/roofs/roof_left_roof.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_roof_right_roof = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/roofs/roof_right_roof.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_roof_innner_border = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4_above/roofs/roof_inner_border.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const c_door_handle = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/block4/door/door_handle.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.3,
                  material: {
                    color: "#8A8A8A",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //b
        const b_stair_lvl1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_lvl2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_lvl3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_lvl4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_lvl5 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level5.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_lvl6 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level6.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_lvl7 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level7.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_lvl8 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/stair_level8.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#f9f5ed",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_handle_left = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/handle_left.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const b_stair_handle_right = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/stair/handle_right.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 10,
                  material: {
                    color: "#d7cfbd",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //stair_side-door
        const b_side_door_column = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/side_door/side_door_column.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //side_door_top_1
        const b_side_door_top_1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/side_door/side_door_top_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //side_door_top_2
        const b_side_door_top_2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/side_door/side_door_top_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.9,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //side_door_top_3
        const b_side_door_top_3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/side_door/side_door_top_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.2,
                  material: {
                    color: "#fbedd7",
                    //[251, 237, 215, 0.2],
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //column
        const zoneB_column123 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/columns/column123.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 19.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const zoneB_column123_beside = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block123/column/column_beside.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 19.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const zoneB_column123_beside_door = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block123/column/column_beside_door.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 16.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const zoneB_column123_back = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block123/column/column_back.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 19.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        const zoneB_column45678 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/columns/column45678.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 19.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //front A
        const zoneB_frontA_column = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor1/column/collumn_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 25.3,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        // B_Rèm Hoa Đá top front
        const zoneB_block45678_floor2_RemHoaDa1 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor2/rem_1.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        // B_Rèm Hoa Đá bottom front
        const zoneB_block45678_floor2_RemHoaDa2 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor2/rem_2.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        // B_Rèm Hoa Đá top back
        const zoneB_block45678_floor2_RemHoaDa3 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor2/rem_3.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        // B_Rèm Hoa Đá bottom back
        const zoneB_block45678_floor2_RemHoaDa4 = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor2/rem_4.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.001,
                  material: {
                    color: "#d9c3a3",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //small column in after
        const zoneB_block45678_small_column = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor1/column/column_small_after.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 6,
                  material: {
                    color: "#fbedd7",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //black column in front
        const zoneB_block45678_black_column = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor1/column/column_small.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 7,
                  material: {
                    color: "gray",
                  },
                  edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //B floor 1 inside columns decor
        const b_floor1_inside_columns_decor = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor1/column/column_decor.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "white",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //b floor 1 front columns
        const b_floor1_roof_columns = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor1/column/roof_column.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "gray",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        //B floor 1 room
        const b_floor1_room = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor1/room/room.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 8,
                  material: {
                    color: "smoke",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });
        //b floor 1 room
        const b_floor1_room_door = new GeoJSONLayer({
          url:
            process.env.PUBLIC_URL +
            "/assets/GeoJSON/B/Block45678/floor1/room/door.geojson",
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 2.85,
                  material: {
                    color: "brown",
                  },
                  edges: {
                    type: "solid",
                    color: "transparent",
                  },
                },
              ],
            },
          },
        });

        const map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation",
          layers: [
            block123_floor2_wall3,
            block123_floor2_window_balcony,
            block123_floor2_wall2,
            block123_floor2_wall1,
            d_attic_roof_floor2,
            d_attic_roof_floor1,
            d_attic_roof_frame,
            d_block45678_floor2_RemHoaDa_top,
            d_block45678_floor2_RemHoaDa,
            d_attic_wall1,
            d_attic_wall2,
            d_roof_sub_edge2_frame_left,
            d_roof_sub_edge2_frame_right,
            d_roof_sub_edge1_frame,
            d_attic_floor,
            d_roof_sub_edge2,
            d_roof_sub_edge1,
            d_columns,
            d_floor1_roof_columns,
            d_floor2_side_columns,
            d_floor2_side_columns,
            d_floor1_room_door,
            d_floor1_room,
            d_floor1_inside_columns_decor,
            d_floor1_inside_columns,
            d_floor1_inside_columns_decor,
            d_floor1_inside_columns,
            d_floor1_front_columns,
            d_floor1_back_columns,
            d_side_door_top_3,
            d_side_door_top_2,
            d_side_door_top_1,
            d_side_door_column,
            d_star_handle_left,
            d_star_handle_right,
            d_side_star,
            d_block123_floor1_a_window_side_window,
            d_block123_floor1_a_window_top_bottom,
            d_block123_floor1_d_window_top_bottom,
            b_stair_lvl1,
            b_stair_lvl2,
            b_stair_lvl3,
            b_stair_lvl4,
            b_stair_lvl5,
            b_stair_lvl6,
            b_stair_lvl7,
            b_stair_lvl8,
            b_stair_handle_left,
            b_stair_handle_right,
            b_side_door_column,
            b_side_door_top_1,
            b_side_door_top_2,
            b_side_door_top_3,
            zoneB_column123,
            zoneB_column123_beside,
            zoneB_column123_beside_door,
            zoneB_column123_back,
            zoneB_column45678,
            zoneB_block45678_floor2_RemHoaDa1,
            zoneB_block45678_floor2_RemHoaDa2,
            zoneB_block45678_floor2_RemHoaDa3,
            zoneB_block45678_floor2_RemHoaDa4,
            zoneB_frontA_column,
            zoneB_block45678_small_column,
            zoneB_block45678_black_column,
            b_floor1_inside_columns_decor,
            b_floor1_roof_columns,
            b_floor1_room,
            b_floor1_room_door,
            c_stair,
            c_stair_handle_left,
            c_stair_handle_right,
            c_block1_left,
            c_block1_right,
            c_block_1_1,
            c_block_1_2,
            c_block_1_3,
            c_block_1_4,
            c_block_2_1,
            c_block_2_2,
            c_block_2_3,
            c_block_6_1,
            c_block_6_2,
            c_block_6_3,
            c_block_6_4,
            c_block_6_5,
            c_block_6_6,
            c_block_6_7,
            c_block_6_8,
            c_window_top_bottom_1,
            c_window_top_bottom_2,
            c_window_top_bottom_3,
            c_window_side_1,
            c_window_side_2,
            c_window_side_3,
            c_main_door,
            c_block_2_4,
            c_block_3_1,
            c_block_3_2,
            c_block_3_3,
            c_block_3_4,
            c_block_4_1,
            c_block_4_2,
            c_block_4_3,
            c_block_4_4,
            c_block_5_1,
            c_block_5_2,
            c_pillars,
            c_pillars2,
            c_pillars_door,
            c_walls,
            c_walls2,
            c_walls3,
            c_walls4,
            c_walls5,
            c_walls6,
            c_roof_left,
            c_roof_right,
            c_roof_left_roof,
            c_roof_right_roof,
            c_roof_innner_border,
            c_door_handle,
            background3,
            background1,
            background2,
            frame1,
            frame2,
            d_block123_floor1_b_window_wall,
            frame3,
            roof1,
            roof2,
            roof3,
            top_roof,
            block3_columns,
            block3_2_columns,
            top_roof_not_straight,
            block3_column,
            ddl_roof,
            ddl_roof_1,
            ddl_roof_2,
            rem_1,
            rem_2,
            a_side_star,
            a_star_handle_left,
            a_star_handle_right,
            a_slope_right,
            a_slope_left,
            a_side_left,
            a_side_right,
          ], //end layers
        });

        const view = new SceneView({
          container: "viewDiv",
          map: map,
          camera: {
            position: [106.69506418299163, 10.776144123120021, 200],
            heading: 0,
            tilt: 30,
          },
        });
        view.popup.defaultPopupTemplateEnabled = true;
      })
      .catch((err) => console.error(err));
  });

  return <div id="viewDiv" className="h-[800px]"></div>;
}

export default Map;
