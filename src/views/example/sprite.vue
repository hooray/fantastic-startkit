<template>
    <div class="sprites">
        <div class="address" />
        <div class="feedback" />
        <div class="payment" />
    </div>
</template>

<style lang="scss" scoped>
.sprites {
    padding: 10px;
    .address,
    .feedback,
    .payment {
        display: inline-block;
        margin-right: 10px;
    }
    .address {
        @include example-sprite(address);
    }
    .feedback {
        @include example-sprite(feedback);
    }
    .payment {
        @include example-sprite(payment);
    }
}
.logo {
    width: 200px;
    height: 200px;
}
</style>
