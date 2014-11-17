# ng-accordion

Simple accordion directive for use in Angular apps.

## Usage

```html
<div class="myFirstAccordion"
	 ng-accordion
	 toggler-selector=".toggler"
	 section-selector=".section"
	 active-class="active"
	 one-at-a-time="false"
	 init-open-section=".two">
	<div class="section zero">
		<div class="toggler">Toggle!</div>
		<div class="content">Zero Content!</div>
	<div>
	<div class="section one">
		<div class="toggler">Toggle!</div>
		<div class="content">One Content!</div>
	<div>
	<div class="section two">
		<div class="toggler">Toggle!</div>
		<div class="content">Two Content!</div>
	<div>
	<div class="section three">
		<div class="toggler">Toggle!</div>
		<div class="content">Three Content!</div>
	<div>
</div>
```

### Options

`toggler-selector`: the selector for the toggle button. (Default `.ng-accordion-toggler`)

`section-selector`: the selector the sections. (Default `.ng-accordion-section`)

`active-class`: Name of the active class. (Default `ng-accordion-active`)

`one-at-a-time`: Set to `false` if you don't want the sections to open one at a time. (No Default)

`init-open-section`: Selector for inital section(s) to have open. (No Default)