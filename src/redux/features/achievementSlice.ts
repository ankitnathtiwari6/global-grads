import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Achievement {
  id: string;
  title: string;
  count: number;
  icon: string;
}

interface Story {
  id: string;
  studentName: string;
  college: string;
  country: string;
  year: number;
  content: string;
  image: string;
}

interface AchievementState {
  achievements: Achievement[];
  stories: Story[];
}

const achievementInitialState: AchievementState = {
  achievements: [],
  stories: [],
};

export const achievementSlice = createSlice({
  name: "achievements",
  initialState: achievementInitialState,
  reducers: {
    setAchievements: (state, action: PayloadAction<Achievement[]>) => {
      state.achievements = action.payload;
    },
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload;
    },
  },
});
