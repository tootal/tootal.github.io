module.exports = (ctx, locals) => {
    const { has_config, get_config, get_thumbnail } = ctx;
    const { posts } = ctx.site;
	const { layout } = ctx.page;
    if (!posts.length) {
        return null;
    }
    if (get_config('widget.recent_posts.not_show').indexOf(layout) !== -1) {
        return null;
    }
    const thumbnail = !has_config('article.thumbnail') || get_config('article.thumbnail') !== false;
    const _posts = posts.sort('date', -1).limit(5).map(post => ({
        link: post.link,
        path: post.path,
        title: post.title,
        date: post.date,
        thumbnail: thumbnail ? get_thumbnail(post) : null,
        // fix circular JSON serialization issue
        categories: () => post.categories
    }));
    return Object.assign(locals, { thumbnail, posts: _posts });
}