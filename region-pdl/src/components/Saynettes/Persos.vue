<template>
  <div class="saynette">
    <Boat class="boat" />

    <Background class="svg" />

    <TextTitle
      :y="18"
      :style="{textAlign: 'center'}"
    >
      Qui voulez-vous suivre aujourd'hui ?
    </TextTitle>

    <SimpleText
      :y="27"
      :style="{textAlign: 'center'}"
    >
      Mme Dubois et M. Moreau sont voisins et
      <b>vivent dans la région des Pays de la Loire.</b>
      <br>
      <b>Ils sont très attentifs à leur impact sur l'environnement</b> et pratiquent le covoiturage
      <br>pour se rendre sur leur lieu de travail.
    </SimpleText>

    <SimpleButton
      text="Mme Dubois"
      :width="20"
      :y="45"
      :x="20"
      @mouseover.native="animDubois = true"
      @mouseleave.native="animDubois = false"
      @click.native="onNext('dubois')"
    />

    <PersoFemme
      class="perso p1"
      :class="{ grow: animDubois }"
    />

    <SimpleButton
      text="M. Moreau"
      :width="20"
      :y="45"
      :x="60"
      @mouseover.native="animMoreau = true"
      @mouseleave.native="animMoreau = false"
      @click.native="onNext('moreau')"
    />

    <PersoHomme
      class="perso p2"
      :class="{ grow: animMoreau }"
    />
  </div>
</template>

<script>
import Background from '@/assets/svg/Persos/background-perso.svg';
import PersoHomme from '@/assets/svg/Persos/man.svg';
import PersoFemme from '@/assets/svg/Persos/woman.svg';
import Boat from '@/assets/svg/Utils/boat.svg';

import TextTitle from '@/components/Utils/TextTitle.vue';
import SimpleText from '@/components/Utils/SimpleText.vue';
import SimpleButton from '@/components/Utils/SimpleButton.vue';

export default {
  name: 'Persos',
  components: {
    TextTitle,
    SimpleText,
    SimpleButton,
    Background,
    PersoHomme,
    PersoFemme,
    Boat
  },
  data: () => {
    return {
      animDubois: false,
      animMoreau: false
    };
  },
  methods: {
    onNext (characterName) {
      this.$store.dispatch('nextScene', {});
      this.$store.dispatch('setCharacter', { name: characterName });
    }
  }
};
</script>

<style scoped>
.perso {
  position: absolute;
}

.p1 {
  left: 24%;
  top: 58%;
  width: 8%;
}

.p2 {
  left: 64%;
  top: 58%;
  width: 11%;
}

.grow {
  -webkit-animation: grow 0.5s linear infinite alternate;
  -moz-animation: grow 0.5s linear infinite alternate;
  -ms-animation: grow 0.5s linear infinite alternate;
  animation: grow 0.5s linear infinite alternate;
}

.boat {
  position: absolute;
  width: 8%;
  left: 15%;
  top: 66%;
  -webkit-animation: float 25s linear infinite alternate;
  -moz-animation: float 25s linear infinite alternate;
  -ms-animation: float 25s linear infinite alternate;
  animation: float 25s linear infinite alternate;
}

@-webkit-keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@-moz-keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@-ms-keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@-webkit-keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
@-moz-keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
@-ms-keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
@keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
</style>
