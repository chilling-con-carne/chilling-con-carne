<template>
    <div class=" flex items-center gap-1">
        🇬🇧<input type="checkbox" class="toggle toggle-sm" :checked="I18n.locale.value==='fr'" @click="changeLanguage">🇫🇷
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const I18n = useI18n();

const changeLanguage = () => {
    if (I18n.locale.value === 'fr') {
        I18n.locale.value = 'en';
    }
    else {
        I18n.locale.value = 'fr'
    }
}

</script>