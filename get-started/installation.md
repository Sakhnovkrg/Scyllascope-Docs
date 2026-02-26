# Installation

The plugin has been tested with all major DAWs on Windows 10–11, modern versions of macOS, and Linux Mint. Available formats: VST3, AU, and LV2. Prefer VST3 when possible — some features are only available in the VST3 version.

Download the latest build from [dsgdnb.com/plugins/scyllascope](https://dsgdnb.com/plugins/scyllascope). Extract the archive and follow the instructions for your platform below.

## Windows

Copy the `.vst3` file to one of the following locations:

- `C:\Program Files\Common Files\VST3`
- Your DAW's custom VST3 folder, if configured

::: tip
Some DAWs (e.g. FL Studio) only scan the `Common Files\VST3` path. If the plugin doesn't show up, make sure it's placed there.
:::

## macOS

Copy the `.vst3` or `.component` (AU) bundle to:

- **VST3:** `/Library/Audio/Plug-Ins/VST3`
- **AU:** `/Library/Audio/Plug-Ins/Components`

These are system paths — Finder will ask for your password when copying. If using Terminal, use `sudo cp`.

Since the plugin is not notarized, macOS will block it on first launch. To allow it:

1. Open the plugin in your DAW — you'll see a warning that it can't be opened.
2. Go to **System Settings → Privacy & Security**.
3. Scroll down — you'll see a message about the blocked plugin. Click **Allow Anyway**.
4. Open the plugin again in your DAW and confirm.

Alternatively, you can remove the quarantine flag via Terminal:

```bash
sudo xattr -dr com.apple.quarantine /Library/Audio/Plug-Ins/VST3/Scyllascope.vst3
```

```bash
sudo xattr -dr com.apple.quarantine /Library/Audio/Plug-Ins/Components/Scyllascope.component
```

The AU version usually works without additional steps. The VST3 version will likely also need ad-hoc signing:

```bash
sudo codesign --force --deep --sign - /Library/Audio/Plug-Ins/VST3/Scyllascope.vst3
```

You can also try fixing file permissions if the plugin still doesn't load:

```bash
sudo chmod -R 755 /Library/Audio/Plug-Ins/VST3/Scyllascope.vst3
```

After any of these steps, restart your DAW and rescan plugins.

## Linux

Copy the `.vst3` file to:

- `/usr/local/lib/vst3`
- Or any other path your DAW is configured to scan

For LV2, copy the `.lv2` bundle to:

- `/usr/local/lib/lv2`

These are system paths. Use `sudo cp` to copy the files.
