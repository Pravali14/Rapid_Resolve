function goToNextPage() {
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('authPage').classList.remove('hidden');
}

function goToSignup() {
    document.getElementById('authPage').classList.add('hidden');
    document.getElementById('signupPage').classList.remove('hidden');
}

function goToLogin() {
    document.getElementById('authPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}

function goToRoleSelection() {
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('rolePage').classList.remove('hidden');
}
