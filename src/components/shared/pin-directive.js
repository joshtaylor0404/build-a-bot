export default (element, binding) => {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });

  element.style.position = 'absolute';
};

// this is shorthand syntax applies to "bind" and "update" lifecycle hooks

// we can make a directive global by adding it to the main.js file
// and calling it Vue.directive('name',  importedDirective)
