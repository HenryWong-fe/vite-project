const parse = (keyPath: string, prefix?: string) => {
  let initIndex = 2
  if (prefix) {
    initIndex = prefix.length + 1
  }
  keyPath = keyPath.slice(initIndex);
  console.log("keyPath", keyPath);

  const lastDotIndex = keyPath.lastIndexOf(".");
  const lastSlashIndex = keyPath.lastIndexOf("/");
  let ext = "";
  let dir = "";
  let name = "";
  let base = "";
  let entry = "";
  ext = keyPath.slice(lastDotIndex);
  if (lastSlashIndex > -1) {
    dir = keyPath.slice(0, lastSlashIndex);
  }
  name = keyPath.slice(lastSlashIndex + 1, lastDotIndex);
  base = name + ext;
  entry = dir ? dir + "/" + name : name;
  return {
    name,
    ext,
    base,
    dir,
    entry,
    dir_dash: dir.replace(/\//g, "-"),
    entry_dash: entry.replace(/\//g, "-"),
  };
};
const modalContext = import.meta.globEager("../views/modals/**/*.vue");
const modalKeys = Object.keys(modalContext);
const routes: any = {};
modalKeys.forEach((keyPath) => {
  const file = modalContext[keyPath];
  const component = file.default || file;
  const parsed = parse(keyPath, "./views/modals/");
  routes[parsed.entry_dash] = component;
});

export default routes;
