# overrides.json

A configuration file for advanced settings that are not exposed in the plugin UI.

```json
{
  "fps": 60,
  "cornerRadius": 6.0,
  "silenceThresholdDb": -96.0,
  "disableExportScreen": 0,
  "disablePlayhead": 0,
  "opengl": 0,
  "softwareRenderer": 0,
  "scMainWaveDim": 0.3,

  "Themes": {
    "Dark": {
      "bgColor": "#16162a",
      "scopeBgColor": "#0f0f1a",
      "controlBgColor": "#1a1a2e",
      "buttonOutlineColor": "#3a3a5a",
      "textColor": "#888899",
      "textBtnOffColor": "#888899",
      "textBtnOnColor": "#cc8833",
      "accentColor": "#00ff88",
      "accentTextColor": "#0a0a14",
      "secondaryAccentColor": "#cc8833",
      "secondaryAccentTextColor": "#ffffff",
      "recordingColor": "#cc3333",
      "waveColor": "#8899aa",
      "holdColor": "#4a5566",
      "sideChainColor": "#ff8844",
      "sideChainAlpha": 0.8,
      "gridColor": "#2a2a4a",
      "playheadColor": "#00ff88",
      "clippingColor": "#cc3333",
      "hoverBgColor": "#1a1a2e",
      "hoverTextColor": "#00ff88",
      "selectionColor": "#00ff88",
      "sliderTrackColor": "#3a3a5a",
      "spectralColors": [
        "#cc3344",
        "#ff7733",
        "#88cc44",
        "#44aadd",
        "#8866ff"
      ]
    }
  }
}
```

## Location

Open [Menu → Open Rec Folder](/header/menu#open-rec-folder) and go one level up. You will find `overrides.json.example` there.
To apply custom settings, create a copy of the file without the `.example` extension. Changes take effect after reloading the plugin. In most DAWs you will also need to restart the DAW itself.

## Settings

### fps

Rendering frame rate. Default is `60`. Can be lowered to improve performance on slower machines. Raising above 60 is not recommended.

### cornerRadius

Corner radius of UI elements. Default is `6.0`. Also toggled via [Menu → Rounded Corners](/header/menu#rounded-corners).

### silenceThresholdDb

The level below which audio is considered silence. Used by the **Trim** function in the [Recorder](/footer/recorder). Default is `-96.0`.

### disableExportScreen

Set to `1` to skip the export screen (Normalize, Trim, Snap) after recording.

### disablePlayhead

Set to `1` to hide the playhead indicator.

### opengl

Set to `1` to enable OpenGL rendering. Not recommended unless you experience performance issues — it may be unstable on some systems, but can fix choppy rendering on others.

### softwareRenderer

Windows only. Set to `1` to use GDI instead of Direct2D for rendering. Can resolve various issues with the plugin, such as UI freezes when multiple instances are open.

### scMainWaveDim

Dims the main waveform when a sidechain signal is present, so the two don't blend together. Default is `0.3` (30% dimming).

## Theme overrides

The `Themes` section allows overriding individual color values for built-in themes. This is a legacy method — since version 1.2.5, single-file themes are supported. See [Themes](/customization/themes) for the current approach.
