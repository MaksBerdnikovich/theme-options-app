<template>
    <v-popover>
        <to-svg-icon name="help"/>

        <template slot="popover">
            <slot/>
        </template>
    </v-popover>
</template>
