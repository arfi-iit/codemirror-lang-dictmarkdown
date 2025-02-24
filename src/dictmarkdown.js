import { parser } from "@arfi-iit/lezer-dictmarkdown";
import { syntaxHighlighting } from "@codemirror/language";
import { HighlightStyle } from "@codemirror/language";
import { LRLanguage } from "@codemirror/language";
import { LanguageSupport } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

export const dictMarkdownSyntaxHighlighting = syntaxHighlighting(
  HighlightStyle.define([
    {
      tag: t.content,
      class: "text",
    },
    {
      tag: t.strong,
      class: "bold",
    },
    {
      tag: t.emphasis,
      class: "italic",
    },
    {
      tag: t.link,
      class: "reference",
    },
    {
      tag: t.monospace,
      letterSpacing: "3px",
      class: "spaced",
    },
    {
      tag: t.compareOperator,
      verticalAlign: "sub",
      fontSize: "small",
      class: "subscript",
    },
    {
      tag: t.arithmeticOperator,
      verticalAlign: "super",
      fontSize: "small",
      class: "superscript",
    },
  ]),
);

export const dictMarkdownLanguage = LRLanguage.define({
  name: "dictmarkdown",
  parser: parser.configure({
    props: [dictMarkdownSyntaxHighlighting],
  }),
});

export function dictMarkdown() {
  return new LanguageSupport(dictMarkdownLanguage);
}
