// ==========================================
// VYORA ADMIN DASHBOARD
// ==========================================


// ==========================================
// 1. ADMIN LOGIN CHECK
// ==========================================

const adminLoggedIn =
    localStorage.getItem("adminLoggedIn");

if (adminLoggedIn !== "true") {

    alert("Please login as Admin first.");

    window.location.href = "admin-login.html";
}


// ==========================================
// 2. GET DASHBOARD SECTIONS
// ==========================================

const dashboardSection =
    document.querySelector(".stats");

const infoGrid =
    document.querySelector(".info-grid");

const recentSection =
    document.querySelector(".recent");

const usersSection =
    document.getElementById("usersSection");

const ownersSection =
    document.getElementById("ownersSection");


// ==========================================
// 3. HIDE USERS & OWNERS INITIALLY
// ==========================================

if (usersSection) {

    usersSection.style.display = "none";

}

if (ownersSection) {

    ownersSection.style.display = "none";

}


// ==========================================
// 4. SIDEBAR MENU
// ==========================================

const menuItems =
    document.querySelectorAll(".sidebar li");


menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const menuName =
            this.querySelector("span").innerText;


        // Remove active class

        if (menuName !== "Logout") {

            menuItems.forEach(function (menu) {

                menu.classList.remove("active");

            });

            this.classList.add("active");

        }


        // ==================================
        // DASHBOARD
        // ==================================

        if (menuName === "Dashboard") {

            dashboardSection.style.display = "grid";

            infoGrid.style.display = "grid";

            recentSection.style.display = "block";

            usersSection.style.display = "none";

            ownersSection.style.display = "none";

        }


        // ==================================
        // USERS
        // ==================================

        else if (menuName === "Users") {

            dashboardSection.style.display = "none";

            infoGrid.style.display = "none";

            recentSection.style.display = "none";

            usersSection.style.display = "block";

            ownersSection.style.display = "none";

        }


        // ==================================
        // OWNERS
        // ==================================

        else if (menuName === "Owners") {

            dashboardSection.style.display = "none";

            infoGrid.style.display = "none";

            recentSection.style.display = "none";

            usersSection.style.display = "none";

            ownersSection.style.display = "block";

        }


        // ==================================
        // OTHER MODULES
        // ==================================

        else if (
            menuName === "Vehicles" ||
            menuName === "Bookings" ||
            menuName === "Cancellations" ||
            menuName === "Complaints" ||
            menuName === "SOS Requests"
        ) {

            alert(
                menuName +
                " module will be opened here."
            );

        }

    });

});


// ==========================================
// 5. USERS - BLOCK / UNBLOCK
// ==========================================

const userTable =
    document.querySelector(".users-table");


if (userTable) {

    userTable.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest("button");


            if (!button) {
                return;
            }


            const row =
                button.closest("tr");


            const status =
                row.querySelector(
                    "td:nth-child(5) span"
                );


            // BLOCK USER

            if (
                button.classList.contains("block-btn")
            ) {

                const confirmBlock =
                    confirm(
                        "Are you sure you want to block this user?"
                    );


                if (confirmBlock) {

                    status.innerText =
                        "Blocked";

                    status.classList.remove(
                        "user-active"
                    );

                    status.classList.add(
                        "user-blocked"
                    );


                    button.innerText =
                        "Unblock";

                    button.classList.remove(
                        "block-btn"
                    );

                    button.classList.add(
                        "unblock-btn"
                    );

                }

            }


            // UNBLOCK USER

            else if (
                button.classList.contains(
                    "unblock-btn"
                )
            ) {

                const confirmUnblock =
                    confirm(
                        "Do you want to unblock this user?"
                    );


                if (confirmUnblock) {

                    status.innerText =
                        "Active";

                    status.classList.remove(
                        "user-blocked"
                    );

                    status.classList.add(
                        "user-active"
                    );


                    button.innerText =
                        "Block";

                    button.classList.remove(
                        "unblock-btn"
                    );

                    button.classList.add(
                        "block-btn"
                    );

                }

            }

        }
    );

}


// ==========================================
// 6. OWNERS - APPROVE / REJECT / BLOCK
// ==========================================

const ownersTable =
    document.querySelector(".owners-table");


if (ownersTable) {

    ownersTable.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest("button");


            if (!button) {
                return;
            }


            const row =
                button.closest("tr");


            const status =
                row.querySelector(
                    "td:nth-child(5) span"
                );


            // =================================
            // APPROVE OWNER
            // =================================

            if (
                button.classList.contains(
                    "approve-btn"
                )
            ) {

                const confirmApprove =
                    confirm(
                        "Approve this vehicle owner?"
                    );


                if (confirmApprove) {

                    status.innerText =
                        "Verified";

                    status.classList.remove(
                        "owner-pending"
                    );

                    status.classList.add(
                        "owner-verified"
                    );


                    button.remove();


                    const rejectButton =
                        row.querySelector(
                            ".reject-btn"
                        );


                    if (rejectButton) {

                        rejectButton.remove();

                    }


                    const actionCell =
                        row.querySelector(
                            "td:last-child"
                        );


                    const blockButton =
                        document.createElement("button");


                    blockButton.className =
                        "owner-block-btn";


                    blockButton.innerText =
                        "Block";


                    actionCell.appendChild(
                        blockButton
                    );

                }

            }


            // =================================
            // REJECT OWNER
            // =================================

            else if (
                button.classList.contains(
                    "reject-btn"
                )
            ) {

                const confirmReject =
                    confirm(
                        "Reject this owner request?"
                    );


                if (confirmReject) {

                    status.innerText =
                        "Rejected";

                    status.classList.remove(
                        "owner-pending"
                    );

                    status.classList.add(
                        "owner-rejected"
                    );


                    button.remove();


                    const approveButton =
                        row.querySelector(
                            ".approve-btn"
                        );


                    if (approveButton) {

                        approveButton.remove();

                    }

                }

            }


            // =================================
            // BLOCK OWNER
            // =================================

            else if (
                button.classList.contains(
                    "owner-block-btn"
                )
            ) {

                const confirmBlock =
                    confirm(
                        "Block this vehicle owner?"
                    );


                if (confirmBlock) {

                    status.innerText =
                        "Blocked";

                    status.classList.remove(
                        "owner-verified"
                    );

                    status.classList.add(
                        "owner-rejected"
                    );


                    button.innerText =
                        "Unblock";


                    button.classList.remove(
                        "owner-block-btn"
                    );


                    button.classList.add(
                        "owner-unblock-btn"
                    );

                }

            }


            // =================================
            // UNBLOCK OWNER
            // =================================

            else if (
                button.classList.contains(
                    "owner-unblock-btn"
                )
            ) {

                const confirmUnblock =
                    confirm(
                        "Unblock this vehicle owner?"
                    );


                if (confirmUnblock) {

                    status.innerText =
                        "Verified";


                    status.classList.remove(
                        "owner-rejected"
                    );


                    status.classList.add(
                        "owner-verified"
                    );


                    button.innerText =
                        "Block";


                    button.classList.remove(
                        "owner-unblock-btn"
                    );


                    button.classList.add(
                        "owner-block-btn"
                    );

                }

            }

        }
    );

}


// ==========================================
// 7. LOGOUT
// ==========================================

const logout =
    document.querySelector(".logout");


if (logout) {

    logout.addEventListener(
        "click",
        function () {

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (confirmLogout) {

                localStorage.removeItem(
                    "adminLoggedIn"
                );


                window.location.href =
                    "admin-login.html";

            }

        }
    );

}


// ==========================================
// 8. VIEW ALL BOOKINGS
// ==========================================

const viewAllButton =
    document.querySelector(
        ".recent .section-header button"
    );


if (viewAllButton) {

    viewAllButton.addEventListener(
        "click",
        function () {

            alert(
                "Bookings module will be opened here."
            );

        }
    );

}