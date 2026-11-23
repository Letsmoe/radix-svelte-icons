<script lang="ts">
	export let color: string = 'currentColor';
	export let size: number = 15;
	export let width: number = size;
	export let height: number = size;
	</script>

	<svg {width} {height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...$$restProps} class={$$restProps.class || ''}>
  <circle cx="4.5" cy="2.5" r=".6" fill={color} />
  <circle cx="4.5" cy="4.5" r=".6" fill="currentColor" />
  <circle cx="4.5" cy="6.499" r=".6" fill="currentColor" />
  <circle cx="4.5" cy="8.499" r=".6" fill="currentColor" />
  <circle cx="4.5" cy="10.498" r=".6" fill="currentColor" />
  <circle cx="4.5" cy="12.498" r=".6" fill="currentColor" />
  <circle cx="6.5" cy="2.5" r=".6" fill="currentColor" />
  <circle cx="6.5" cy="4.5" r=".6" fill="currentColor" />
  <circle cx="6.5" cy="6.499" r=".6" fill="currentColor" />
  <circle cx="6.5" cy="8.499" r=".6" fill="currentColor" />
  <circle cx="6.5" cy="10.498" r=".6" fill="currentColor" />
  <circle cx="6.5" cy="12.498" r=".6" fill="currentColor" />
  <circle cx="8.499" cy="2.5" r=".6" fill="currentColor" />
  <circle cx="8.499" cy="4.5" r=".6" fill="currentColor" />
  <circle cx="8.499" cy="6.499" r=".6" fill="currentColor" />
  <circle cx="8.499" cy="8.499" r=".6" fill="currentColor" />
  <circle cx="8.499" cy="10.498" r=".6" fill="currentColor" />
  <circle cx="8.499" cy="12.498" r=".6" fill="currentColor" />
  <circle cx="10.499" cy="2.5" r=".6" fill="currentColor" />
  <circle cx="10.499" cy="4.5" r=".6" fill="currentColor" />
  <circle cx="10.499" cy="6.499" r=".6" fill="currentColor" />
  <circle cx="10.499" cy="8.499" r=".6" fill="currentColor" />
  <circle cx="10.499" cy="10.498" r=".6" fill="currentColor" />
  <circle cx="10.499" cy="12.498" r=".6" fill="currentColor" />
</svg>
