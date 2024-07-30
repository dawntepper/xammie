const admin = require('firebase-admin');
const serviceAccount = require('../config/xappie-3296-firebase-adminsdk-rgo9o-f1b6beea4f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const data = {
  users: {
    userId1: {
      name: "John Doe",
      email: "john.doe1@example.com",
      profilePicture: "url_to_profile_picture_1",
      bio: "A short bio about John 1",
      posts: {
        postId1: {
          content: "This is John's first post",
          timestamp: 1632986400000,
          likes: 10,
          comments: [
            {
              userId: "userId2",
              comment: "Nice post, John!",
              timestamp: 1632986500000
            }
          ]
        }
      },
      followers: {
        followerId2: {
          followerId: "userId2",
          timestamp: 1632986400000
        },
        followerId3: {
          followerId: "userId3",
          timestamp: 1632986500000
        }
      }
    },
    userId2: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      profilePicture: "url_to_profile_picture_2",
      bio: "A short bio about Jane",
      posts: {
        postId2: {
          content: "This is Jane's first post",
          timestamp: 1632987400000,
          likes: 15,
          comments: [
            {
              userId: "userId1",
              comment: "Great post, Jane!",
              timestamp: 1632987500000
            }
          ]
        }
      },
      followers: {
        followerId1: {
          followerId: "userId1",
          timestamp: 1632987400000
        }
      }
    },
    userId3: {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      profilePicture: "url_to_profile_picture_3",
      bio: "A short bio about Alice",
      posts: {
        postId3: {
          content: "This is Alice's first post",
          timestamp: 1632988400000,
          likes: 20,
          comments: [
            {
              userId: "userId2",
              comment: "Awesome post, Alice!",
              timestamp: 1632988500000
            }
          ]
        }
      },
      followers: {
        followerId1: {
          followerId: "userId1",
          timestamp: 1632988400000
        },
        followerId2: {
          followerId: "userId2",
          timestamp: 1632988500000
        }
      }
    },
    userId4: {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      profilePicture: "url_to_profile_picture_4",
      bio: "A short bio about Bob",
      posts: {},
      followers: {}
    },
    userId5: {
      name: "Charlie Green",
      email: "charlie.green@example.com",
      profilePicture: "url_to_profile_picture_5",
      bio: "A short bio about Charlie",
      posts: {},
      followers: {}
    },
    userId6: {
      name: "Dave White",
      email: "dave.white@example.com",
      profilePicture: "url_to_profile_picture_6",
      bio: "A short bio about Dave",
      posts: {},
      followers: {}
    },
    userId7: {
      name: "Eva Black",
      email: "eva.black@example.com",
      profilePicture: "url_to_profile_picture_7",
      bio: "A short bio about Eva",
      posts: {},
      followers: {}
    },
    userId8: {
      name: "Frank Yellow",
      email: "frank.yellow@example.com",
      profilePicture: "url_to_profile_picture_8",
      bio: "A short bio about Frank",
      posts: {},
      followers: {}
    },
    userId9: {
      name: "Grace Red",
      email: "grace.red@example.com",
      profilePicture: "url_to_profile_picture_9",
      bio: "A short bio about Grace",
      posts: {},
      followers: {}
    },
    userId10: {
      name: "Hank Blue",
      email: "hank.blue@example.com",
      profilePicture: "url_to_profile_picture_10",
      bio: "A short bio about Hank",
      posts: {},
      followers: {}
    }
  },
  posts: {
    postId1: {
      userId: "userId1",
      content: "This is John's first post",
      timestamp: 1632986400000,
      likes: 10,
      comments: [
        {
          userId: "userId2",
          comment: "Nice post, John!",
          timestamp: 1632986500000
        }
      ]
    },
    postId2: {
      userId: "userId2",
      content: "This is Jane's first post",
      timestamp: 1632987400000,
      likes: 15,
      comments: [
        {
          userId: "userId1",
          comment: "Great post, Jane!",
          timestamp: 1632987500000
        }
      ]
    },
    postId3: {
      userId: "userId3",
      content: "This is Alice's first post",
      timestamp: 1632988400000,
      likes: 20,
      comments: [
        {
          userId: "userId2",
          comment: "Awesome post, Alice!",
          timestamp: 1632988500000
        }
      ]
    }
  },
  messages: {
    messageId1: {
      senderId: "userId1",
      receiverId: "userId2",
      content: "Hello Jane!",
      timestamp: 1632986400000
    },
    messageId2: {
      senderId: "userId2",
      receiverId: "userId1",
      content: "Hi John!",
      timestamp: 1632987400000
    }
  },
  comments: {
    commentId1: {
      postId: "postId1",
      userId: "userId2",
      content: "Nice post, John!",
      timestamp: 1632986500000
    },
    commentId2: {
      postId: "postId2",
      userId: "userId1",
      content: "Great post, Jane!",
      timestamp: 1632987500000
    },
    commentId3: {
      postId: "postId3",
      userId: "userId2",
      content: "Awesome post, Alice!",
      timestamp: 1632988500000
    }
  },
  likes: {
    likeId1: {
      postId: "postId1",
      userId: "userId2",
      timestamp: 1632986500000
    },
    likeId2: {
      postId: "postId2",
      userId: "userId1",
      timestamp: 1632987500000
    },
    likeId3: {
      postId: "postId3",
      userId: "userId2",
      timestamp: 1632988500000
    }
  },
  followers: {
    followerId1: {
      userId: "userId1",
      followerId: "userId2",
      timestamp: 1632986400000
    },
    followerId2: {
      userId: "userId2",
      followerId: "userId1",
      timestamp: 1632987400000
    },
    followerId3: {
      userId: "userId3",
      followerId: "userId1",
      timestamp: 1632988400000
    }
  }
};

const importData = async () => {
  for (const [collection, documents] of Object.entries(data)) {
    for (const [docId, docData] of Object.entries(documents)) {
      const docRef = db.collection(collection).doc(docId);
      await docRef.set(docData);

      // Check for subcollections like 'posts' and 'followers' and add them
      if (docData.posts) {
        for (const [subDocId, subDocData] of Object.entries(docData.posts)) {
          await docRef.collection('posts').doc(subDocId).set(subDocData);
        }
      }
      if (docData.followers) {
        for (const [subDocId, subDocData] of Object.entries(docData.followers)) {
          await docRef.collection('followers').doc(subDocId).set(subDocData);
        }
      }
    }
  }
  console.log('Data imported successfully');
};

importData().catch(console.error);
