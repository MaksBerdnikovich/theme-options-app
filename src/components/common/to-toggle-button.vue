<template>
  <button type="button" v-on:click="toggle()" v-bind:class="['to-toggle-btn','to-toggle-btn-'+isEnabled]">
    <to-svg-icon v-if="valueIcon" :name="valueIcon" />
    <span v-if="valueTitle">{{ valueTitle }}</span>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: [String, Number, Boolean, Object],
    falseValue: {
      type: [String, Number, Boolean, Object],
      required: false,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean, Object],
      required: false,
      default: true
    },
    falseValueTitle: {
      type: String,
      required: false
    },
    trueValueTitle: {
      type: String,
      required: false
    },
    falseValueIcon: {
      type: String,
      required: false
    },
    trueValueIcon: {
      type: String,
      required: false
    }
  },

  computed: {
    valueIcon: function() {
      return this.value == this.trueValue
        ? this.trueValueIcon
        : this.falseValueIcon;
    },

    isEnabled: function() {
      return this.value == this.trueValue;
    },

    valueTitle: function() {
      return this.value == this.trueValue
        ? this.trueValueTitle
        : this.falseValueTitle;
    }
  },

  methods: {
    toggle: function() {
      this.$emit("input", this.isEnabled ? this.falseValue : this.trueValue);
    }
  }
};
</script>

<style lang="scss">
</style>
