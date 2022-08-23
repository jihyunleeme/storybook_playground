import React from "react";

import Task from "./Task";

export default {
  component: Task, // 해당 컴포넌트
  title: "Task", // 스토리북 앱 사이드바에서 컴포넌트 참조하는 방법
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({}); // export 사용하여 스토리에서 재사용
Default.args = {
  // args를 사용하여 스토리북 재실행 없이 Controls addon으로 컴포넌트 실시간 수정
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
