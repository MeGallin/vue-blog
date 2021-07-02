<template>
  <div class="blog-wrapper">
    <div class="blog-box">
      <div>
        <h1 class="underline-light">{{ blogs[index].heading }}</h1>
        <div v-html="blogs[index].message"></div>
        <div class="blog-footer-wrapper">
          <p>{{ blogs[index].posted }}</p>
          <p>Post by {{ blogs[index].name }}</p>
        </div>
        <div class="clap-wrapper">
          <div>
            <span
              class="likes"
              @click="
                handleLikes(
                  blogs[index].id,
                  blogs[index].name,
                  blogs[index].heading,
                  blogs[index].message,
                  blogs[index].likes
                )
              "
            >
              <i class="far fa-thumbs-up"></i>
              <span class="text-small">{{ blogs[index].likes }}</span>
            </span>
          </div>
          <div>
            <span
              class="dislikes"
              @click="
                handleDislikes(
                  blogs[index].id,
                  blogs[index].name,
                  blogs[index].heading,
                  blogs[index].message,
                  blogs[index].dislikes
                )
              "
              ><i class="far fa-thumbs-down"></i
              ><span class="text-small">{{ blogs[index].dislikes }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-box-multi" v-if="blogs !== '0 results'">
      <div
        v-for="(blog, index) in blogs"
        :key="blog.id"
        class="item"
        @click="handleShowBlog(index)"
      >
        <h1>
          {{ blog.heading }}
        </h1>
        <p v-html="blog.message.slice(0, 36) + '...'"></p>
        <p>{{ blog.name }}</p>
      </div>
    </div>

    <div v-else>
      <p>No Post(s)</p>
    </div>
  </div>
</template>

<script>
import $Store from '../../../store/index';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      index: 0,
    };
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
    handleShowBlog(index) {
      this.index = index;
    },
  },
};
</script>

<style scoped src="./HomeBlog.css"></style>
