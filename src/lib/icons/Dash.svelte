<script lang="ts">
	export let color: string = 'currentColor';
	export let size: number = 15;
	export let width: number = size;
	export let height: number = size;
	</script>

	<svg {width} {height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...$$restProps} class={$$restProps.class || ''}>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 7.5C5 7.22386 5.22386 7 5.5 7H9.5C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z"
    fill={color}
  />
</svg>
