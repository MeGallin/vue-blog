<template>
  <div>
    <button type="button" @click="hideTitles = !hideTitles">
      <span v-if="hideTitles">Show More Titles</span>
      <span v-if="!hideTitles">Show Less Titles</span>
    </button>

    <div v-if="!hideTitles">
      <div class="blog-box-multi" v-if="blogs !== '0 results'">
        <div>
          <form>
            <div>
              <label for="search"
                >Search Title(s)
                <input
                  type="text"
                  name="search"
                  id="search"
                  v-model="search"
                  class="search-input"
                  :class="this.search.length < 3 ? 'invalid' : 'entered'"
                />
              </label>
            </div>

            <button
              type="button"
              @click="handleClearSearch()"
              :disabled="isDisabled"
            >
              Clear Search
            </button>
          </form>
        </div>

        <div
          v-for="(blog, index) in filteredBlogs"
          :key="blog.id"
          class="item"
          @click="handleShowBlog(index)"
        >
          <h3 class="underline-dark">
            <span v-html="matchName(blog.heading)"></span>
          </h3>

          <p v-html="blog.message.slice(0, 80) + '...'"></p>
          <div class="blog-box-multi-footer">
            <span class="text-small">{{ blog.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-box" v-if="hideTitles">
      <div>
        <h1 v-if="filteredBlogs[index] !== undefined" class="underline-light">
          {{ filteredBlogs[index].heading }}
        </h1>

        <div
          v-if="filteredBlogs[index] !== undefined"
          v-html="filteredBlogs[index].message"
        ></div>
        <div
          v-if="
            filteredBlogs[index] !== undefined &&
            filteredBlogs[index].admin === '1'
          "
          class="adminMessage"
        >
          <i class="fas fa-exclamation"></i> editied by ADMIN.
        </div>
        <hr />
        <div
          v-if="filteredBlogs[index] !== undefined"
          class="blog-footer-wrapper"
        >
          <p>
            {{ timeStamp(filteredBlogs[index].posted, 'YYYYMMDD, h:mm:ss a') }}
          </p>
          <p>Post by {{ filteredBlogs[index].name }}</p>
        </div>

        <div class="clap-wrapper">
          <div>
            <span
              v-if="filteredBlogs[index] !== undefined"
              class="likes"
              @click="
                handleLikes(
                  filteredBlogs[index].id,
                  filteredBlogs[index].name,
                  filteredBlogs[index].heading,
                  filteredBlogs[index].message,
                  filteredBlogs[index].likes
                )
              "
            >
              <i class="far fa-thumbs-up"></i>
              <span class="text-small">{{ filteredBlogs[index].likes }}</span>
            </span>
          </div>
          <div>
            <span
              v-if="filteredBlogs[index] !== undefined"
              class="dislikes"
              @click="
                handleDislikes(
                  filteredBlogs[index].id,
                  filteredBlogs[index].name,
                  filteredBlogs[index].heading,
                  filteredBlogs[index].message,
                  filteredBlogs[index].dislikes
                )
              "
              ><i class="far fa-thumbs-down"></i
              ><span class="text-small">{{
                filteredBlogs[index].dislikes
              }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $Store from '../../../store/index';
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  data() {
    return {
      index: 0,
      search: '',
      isDisabled: true,
      hideTitles: true,
      hideTitleButtonText: '',
    };
  },
  computed: {
    ...mapGetters(['blogs', 'userData', 'isAuthenticated']),
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.heading.toLowerCase().match(this.search);
      });
    },
  },
  created() {
    $Store.dispatch('getBlogs');
  },
  methods: {
    timeStamp(date, format) {
      return moment(date, format).fromNow();
    },
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
      this.hideTitles = true;
    },
    matchName(current) {
      let reggie = new RegExp(this.search, 'ig');
      let found = current.search(reggie) !== -1;
      return !found
        ? current
        : current.replace(
            reggie,
            '<span style="color:greenYellow; background-color:rgba(51,51,51,1)" >' +
              this.search +
              '</span>'
          );
    },
    handleClearSearch() {
      this.search = '';
    },
  },
  watch: {
    search(val) {
      this.search = val;
      if (this.search.length != '') {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped src="./HomeBlog.css"></style>
