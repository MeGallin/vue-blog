<template>
  <div v-if="blogs !== '0 results'">
    <div v-for="blog in blogs" :key="blog.id" class="item">
      <h1 class="underline-dark">{{ blog.heading }}</h1>
      <p>{{ blog.message }}</p>
      <div class="blog-footer-wrapper">
        <p>{{ blog.posted }}</p>
        <p>Post by {{ blog.name }}</p>
      </div>
      <div class="clap-wrapper">
        <div>
          <span
            class="likes"
            @click="
              handleLikes(
                blog.id,
                blog.name,
                blog.heading,
                blog.message,
                blog.likes
              )
            "
          >
            <i class="far fa-thumbs-up"></i>
            <span class="text-small">{{ blog.likes }}</span>
          </span>
        </div>
        <div>
          <span
            class="dislikes"
            @click="
              handleDislikes(
                blog.id,
                blog.name,
                blog.heading,
                blog.message,
                blog.dislikes
              )
            "
            ><i class="far fa-thumbs-down"></i
            ><span class="text-small">{{ blog.dislikes }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>No Post(s)</p>
  </div>
</template>

<script>
import $Store from '../../../store/index';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['blogs', 'userData', 'isAuthenticated']),
  },
  created() {
    $Store.dispatch('getBlogs');
  },
  methods: {
    handleLikes(id, name, heading, message, likes) {
      const likesData = {
        id: id,
        name: name,
        heading: heading,
        message: message,
        likes: parseInt(likes) + 1,
      };
      $Store.dispatch('addLike', likesData);
    },
    handleDislikes(id, name, heading, message, dislikes) {
      const disLikesData = {
        id: id,
        name: name,
        heading: heading,
        message: message,
        dislikes: parseInt(dislikes) + 1,
      };
      $Store.dispatch('addDisLike', disLikesData);
    },
  },
};
</script>

<style scoped src="./HomeBlog.css"></style>
