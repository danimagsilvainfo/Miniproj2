<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Patrocinador" />
      <b-row>
        <b-col cols="2"></b-col>
        <b-col>
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="sponsor.name"
                type="text"
                class="form-control form-control-lg"
                placeholder="Nome do patrocinador"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="sponsor.category"
                type="text"
                class="form-control form-control-lg"
                placeholder="Categoria"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="sponsor.website"
                type="url"
                class="form-control form-control-lg"
                placeholder="Website"
              />
            </div>
            <div class="form-group">
              <textarea
                v-model="sponsor.description"
                class="form-control form-control-lg"
                placeholder="Descrição"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-edit"></i> ATUALIZAR
            </button>
            <router-link
              :to="{ name: 'listSponsors' }"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            >
              <i class="fas fa-window-close"></i> CANCELAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { EDIT_SPONSOR } from "@/store/sponsors/sponsor.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "EditSponsor",
  components: { HeaderPage },
  data() {
    return { sponsor: {} };
  },
  computed: {
    ...mapGetters("sponsor", ["getSponsorsById", "getMessage"])
  },
 methods: {
  update() {
    this.$store
      .dispatch(`sponsor/${EDIT_SPONSOR}`, {
        ...this.sponsor,
        _id: this.$route.params.sponsorId
      })
      .then(
        () => {
          this.$alert(this.getMessage, "Patrocinador atualizado!", "success");
          router.push({ name: "listSponsors" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
  }
  },
  created() {
    this.sponsor = this.getSponsorsById(this.$route.params.sponsorId);
  }
};
</script>