<script lang="ts">
	export let color: string = 'currentColor';
	export let size: number = 15;
	export let width: number = size;
	export let height: number = size;
	</script>

	<svg {width} {height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...$$restProps} class={$$restProps.class || ''}>
  <path d="M9 4L9 11L4.5 7.5L9 4Z" fill={color} />
</svg>
