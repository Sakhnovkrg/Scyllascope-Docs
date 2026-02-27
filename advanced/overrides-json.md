# overrides.json

A configuration file for advanced settings that are not exposed in the plugin UI.

## Location

Open [Menu → Open Rec Folder](/header/menu#open-rec-folder) and go one level up. You will find `overrides.json.example` there. To see the current default values, delete the file and reopen the plugin — it will be recreated with up-to-date defaults.

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

The `Themes` section allows overriding individual color values for built-in themes. This is a legacy method — since version 1.2.5, single-file themes are supported. See [Themes](/advanced/themes) for the current approach.
