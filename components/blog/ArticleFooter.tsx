import { formatDateRo } from "@/lib/utils";
import { ARTICLE_AUTHOR } from "@/lib/constants";

export default function ArticleFooter({ date }: { date: string }) {
    return (
        <p className="not-prose mt-14 border-t border-dc-line pt-5 font-dc-mono text-[13px] text-dc-text-muted">
            {ARTICLE_AUTHOR.name} · {ARTICLE_AUTHOR.jobTitle}, {ARTICLE_AUTHOR.description} ·{" "}
            <time dateTime={date}>{formatDateRo(date)}</time>
        </p>
    );
}
