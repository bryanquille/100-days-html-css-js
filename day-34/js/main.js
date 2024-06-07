const markAsReadBtn = document.querySelector("#mark-as-read-btn");
const unreadNotifications = document.querySelectorAll(".unread-notification");
const unreadPointElements = document.querySelectorAll(".unread");
const unreadNotificationsNumber = document.querySelector(
  "#unread-notifications-number"
);
let unreadCounter = unreadPointElements.length;

markAsReadBtn.addEventListener("click", () => {
  unreadNotifications.forEach((unreadNot) => {
    unreadNot.classList.add("bg-slate-100");
  });
  unreadPointElements.forEach((unreadPoint) => {
    unreadPoint.textContent = "";
  });
  unreadCounter = 0;
  unreadNotificationsNumber.textContent = "0";
});

const unreadNotificationsArray = [...unreadNotifications];
unreadNotificationsArray.forEach((unreadNot) => {
  unreadNot.addEventListener("click", function handleClick(e) {
    const notificationContentChildren = [
      ...e.currentTarget.childNodes[3].childNodes[1].children,
    ];
    notificationContentChildren.forEach((children) => {
      if ([...children.classList].includes("unread")) {
        children.textContent = "";
        e.currentTarget.classList.remove("unread-notification");
        if (unreadCounter > 0) {
          unreadCounter--;
          unreadNotificationsNumber.textContent = unreadCounter;
          unreadNot.removeEventListener('click', handleClick);
        }
      }
    });
  });
});
