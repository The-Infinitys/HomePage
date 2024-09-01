def git_renew():
    os.system("git config user.name github-actions")
    os.system("git config user.email github-actions@github.com")
    os.system("git add .")
    os.system('git commit -m "Create Sitemap"')
    os.system("git push")
git_renew()
