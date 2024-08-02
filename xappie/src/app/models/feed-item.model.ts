export interface FeedItem {
    userId: string;
    username: string;
    profilePicture?: string;
    activityDescription: string;
    carbonFootprintSaved?: number;
    mediaUrl?: string;
    distance?: number;
    timestamp: Date;
    likes?: number;
    comments?: { username: string; comment: string; timestamp: Date }[];
  }
  