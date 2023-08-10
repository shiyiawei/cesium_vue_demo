<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import * as Cesium from 'cesium'
import { randomPoint } from '@turf/turf'
export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain(),
        animation: false,
        timeline: false,
      })
      if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
        //判断是否支持图像渲染像素化处理
        viewer.resolutionScale = window.devicePixelRatio
      }
      viewer.scene.postProcessStages.fxaa.enabled = true
      viewer.scene.debugShowFramesPerSecond = true // 显示帧率

      const geoidService = new Cesium.ArcGISTiledElevationTerrainProvider({
        url:
          "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/EGM2008/ImageServer",
      });
      const cesium3dTilesetOptions = {
        // skipLevelOfDetail: false,
        // debugShowBoundingVolume: false,
      };
      const i3sOptions = {
        url: "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_3DObjects_1_7/SceneServer/layers/0",
        traceFetches: false, // for tracing I3S fetches
        geoidTiledTerrainProvider: geoidService, // pass the geoid service
        cesium3dTilesetOptions: cesium3dTilesetOptions, // options for internal Cesium3dTileset
      };
      const i3sProvider = new Cesium.I3SDataProvider(i3sOptions);

      i3sProvider.readyPromise.then(function () {
        const center = Cesium.Rectangle.center(i3sProvider.extent);
        center.height = 10000.0;
        viewer.camera.setView({
          destination: Cesium.Ellipsoid.WGS84.cartographicToCartesian(center),
        });
      });
      viewer.scene.primitives.add(i3sProvider);
    },
  },
}
</script>

<style lang="scss" scoped>
#cesiumContainer {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
