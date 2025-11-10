# Publishing Guide - Shiba UI

This document describes the process of publishing packages to npm.

## Package Structure

The library is published as **two main packages** that users install:

1. **@shiba-ui/browser** - React.js components (for web projects)
2. **@shiba-ui/app** - React Native components (for mobile projects)

**Important note**: `@shiba-ui/shared` also needs to be published, but it's only an **internal dependency**. No one installs it directly - it's automatically installed when someone installs `browser` or `app`.

## Prerequisites

1. npm account with access to the `@shiba-ui` scope
2. Authenticated on npm: `npm login`
3. Packages built: `npm run build`

## Publishing Order

**IMPORTANT**: Always publish in the following order:

1. `@shiba-ui/shared` (first - internal dependency, not installed directly)
2. `@shiba-ui/browser` (main package for web)
3. `@shiba-ui/app` (main package for mobile)

**Why publish shared?** When someone installs `@shiba-ui/browser`, npm needs to be able to download `@shiba-ui/shared` which is declared as a dependency. That's why it needs to be published, even though no one installs it directly.

## Publishing Process

### Option 1: Individual Publishing

```bash
# 1. Publish shared
npm run publish:shared

# 2. Publish browser
npm run publish:browser

# 3. Publish app
npm run publish:app
```

### Option 2: Sequential Publishing

```bash
# Publishes all in the correct order
npm run publish:all
```

### Manual Publishing

If you prefer to publish manually:

```bash
# Shared
cd packages/shared
npm publish --access public

# Browser
cd ../browser
npm publish --access public

# App
cd ../app
npm publish --access public
```

## Versioning

### Update Versions

To update versions across all packages:

```bash
# Patch (1.0.0 -> 1.0.1)
npm run version:patch

# Minor (1.0.0 -> 1.1.0)
npm run version:minor

# Major (1.0.0 -> 2.0.0)
npm run version:major
```

### Manual Versioning

To update versions individually:

```bash
cd packages/shared
npm version patch|minor|major
```

## Pre-Publishing Checklist

- [ ] Code tested and working
- [ ] Build executed successfully: `npm run build`
- [ ] Versions updated correctly
- [ ] Internal dependencies with fixed versions (`^1.0.0`)
- [ ] README updated (if necessary)
- [ ] CHANGELOG updated (if maintained)

## Post-Publishing Verification

After publishing, verify that packages are available:

```bash
# Main packages (that users install)
npm view @shiba-ui/browser
npm view @shiba-ui/app

# Internal dependency (verification)
npm view @shiba-ui/shared
```

**Installation test:**

```bash
# Test browser installation (should install shared automatically)
npm install @shiba-ui/browser

# Test app installation (should install shared automatically)
npm install @shiba-ui/app
```

## Troubleshooting

### Error: "You do not have permission to publish"

- Check if you're authenticated: `npm whoami`
- Check if you have access to the `@shiba-ui` scope
- If necessary, create the scope on npm: `npm login` and configure the scope

### Error: "Package name already exists"

- The version has already been published
- Update the version before publishing again

### Dependencies not found

- Make sure to publish `@shiba-ui/shared` first
- Wait a few minutes after publishing shared before publishing the others

## Important Notes

1. **Always publish `shared` first** - Other packages depend on it
2. **Use `--access public`** - Required for scoped packages
3. **Versions should be synchronized** - When possible, keep versions aligned
4. **Test locally first** - Use `npm link` to test before publishing
