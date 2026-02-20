# @zolbooo/dummy-postinstall

Dummy npm package configured for npm publish tests.

## Behavior

On install, it runs `postinstall.js` and writes a file named `pwned` to the install command's working directory (`INIT_CWD`, falling back to `process.cwd()`).

## Publish to npm with GitHub Actions

1. Push a version tag like `v0.0.1`.
2. Add repository secret `NPM_TOKEN` (an npm access token with publish rights).
3. GitHub Action `.github/workflows/publish.yml` runs `npm publish`.

Make sure the package name is available on npm and the scope is configured in npm.
