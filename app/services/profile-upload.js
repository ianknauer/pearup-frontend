import CloudinaryProfileUpload from 'ember-profile-upload/services/cloudinary-profile-upload';

export default CloudinaryProfileUpload.extend({
  deserializeResponse(response) {
    return `${response.url}`;
  },
});
