export const landingContent = {
  hero: {
    eyebrow: 'Decision intelligence for autonomous agents',
    title: 'Every agent action, evaluated before it runs.',
    description:
      'Voscus evaluates every action your agents propose — assessing blast radius, matching policies, and routing decisions to the right outcome — before anything executes.',
    dispositions: [
      { label: 'Allowed', value: '231' },
      { label: 'Warned', value: '3' },
      { label: 'Held', value: '2' },
      { label: 'Stopped', value: '1' },
    ],
    streamItems: [
      ['14:32:05', 'Email agent targeting 48,216 external recipients', 'assessing'],
      ['14:32:06', 'Blast radius mapped — CRM, billing, and compliance scope', 'mapped'],
      ['14:32:07', 'Held — awaiting human approval.', 'held'],
    ],
    reasoning: {
      blastRadius: {
        value: '48,216 external contacts',
        detail: 'Scope: CRM · billing · compliance segments',
      },
      policyMatch: {
        value: 'REQUIRE_APPROVAL',
        detail: 'Exceeds external send threshold (5,000)',
      },
      explanation:
        'This action targets 48,216 external contacts — 9.6× the approved threshold — and touches compliance-regulated segments. Routing to security team for approval before execution.',
    },
  },

  problem: {
    eyebrow: 'The Gap',
    title: 'Agents Act. Nobody Knows the Downstream Consequence.',
    description:
      'Content filters and output guardrails answer the wrong question. They ask "is this safe to say?" — not "what happens if this runs?" By the time a risky action completes, the scope of its impact is already set.',
    risks: [
      {
        icon: 'mail',
        title: 'Email Agents',
        description:
          'Send to wrong recipients, expose sensitive data, or trigger compliance obligations across thousands of contacts.',
      },
      {
        icon: 'code',
        title: 'Code Agents',
        description:
          'Push breaking changes, introduce vulnerabilities, or alter production infrastructure without human review.',
      },
      {
        icon: 'database',
        title: 'Data Agents',
        description:
          'Access unauthorized records, export regulated data, or alter datasets in ways that propagate downstream.',
      },
      {
        icon: 'globe',
        title: 'API Agents',
        description:
          'Fire incorrect requests, consume budget against intent, or trigger state changes across dependent systems.',
      },
    ],
    insight:
      'Competitors intercept after intent is expressed — filtering outputs, blocking content, flagging responses. Voscus intercepts before execution. It maps the blast radius of an action, evaluates downstream consequence, and gives agents — and the teams running them — a real decision.',
  },
  product: {
    eyebrow: 'How Voscus Works',
    title: 'Six capabilities. One decision before every action.',
    description:
      'Before any agent action executes, Voscus assesses blast radius, matches policy, and routes the result to one of four outcomes — deterministically, with full reasoning. No LLM in the decision path.',
    features: [
      {
        icon: 'eye',
        title: 'Pre-Execution Assessment',
        description:
          'Every action an agent proposes is evaluated before it runs. Voscus intercepts at the point of intent — not after execution — and maps what the action will actually do.',
      },
      {
        icon: 'target',
        title: 'Blast Radius Analysis',
        description:
          'The core differentiator. Before execution, Voscus maps the full downstream reach of an action — contacts, systems, data, and compliance scope — deterministically, not by inference. No other product in this space does this.',
      },
      {
        icon: 'cpu',
        title: 'Deterministic Decision Engine',
        description:
          'No LLM in the decision path. Given the same action and the same policies, Voscus produces the same outcome every time. Every decision is written to an append-only log with full reasoning — what the action was, what policy applied, and what outcome was selected.',
      },
      {
        icon: 'split',
        title: 'The Four Outcomes',
        description:
          'Every action resolves to one of four outcomes: Allow (proceed), Warn (proceed with notice), Hold (route for human approval), or Stop (reject). Most actions are allowed. Intervention is the exception, not the default.',
      },
      {
        icon: 'code',
        title: 'Policy-as-Code',
        description:
          'Enforcement rules written in YAML, stored in version control, and reviewed like any other code change. Engineers and security teams understand this model immediately. Policies are inspectable, diffable, and auditable by design.',
      },
      {
        icon: 'users',
        title: 'Human-in-the-Loop Approval',
        description:
          'REQUIRE_APPROVAL is a first-class outcome, not a fallback. Consequential actions are routed to the right person — with blast radius, policy context, and a plain-language explanation — before anything executes.',
      },
    ],
    metrics: [
      { label: 'Actions Assessed', value: '237', sublabel: 'Pre-execution decisions in last 24h', pulse: true },
      { label: 'Held for Approval', value: '2', sublabel: 'Routed to human review', pulse: false },
      { label: 'Systems Mapped', value: '3', sublabel: 'In-scope blast radius', pulse: false },
      { label: 'Policy Matched', value: '9', sublabel: 'Rules applied across all outcomes', pulse: false },
    ],
  },
  whyVoscus: {
    eyebrow: 'The Core Difference',
    title: 'Others Intercept After. Voscus Intercepts Before.',
    description:
      'Competitors are reactive by design — they filter outputs, block content, and flag responses. Voscus answers a different question entirely: what happens if this action runs?',
    comparisons: [
      {
        feature: 'Pre-execution assessment',
        voscus: true,
        competitors: false,
        details: 'Evaluate agent actions before they run, not after',
      },
      {
        feature: 'Blast radius analysis',
        voscus: true,
        competitors: false,
        details: 'Deterministic mapping of downstream consequence across systems',
      },
      {
        feature: 'Impact-aware policy enforcement',
        voscus: true,
        competitors: false,
        details: 'Policy evaluated against actual scope, not intent signals',
      },
      {
        feature: 'Human approval workflows',
        voscus: true,
        competitors: false,
        details: 'High-impact actions routed to approvers with full context',
      },
      {
        feature: 'Explainable audit trails',
        voscus: true,
        competitors: 'Limited',
        details: 'Every decision traced: intent, assessment, policy, outcome',
      },
      {
        feature: 'Policy-as-code rules',
        voscus: true,
        competitors: 'Limited',
        details: 'Deterministic, version-controlled, inspectable enforcement',
      },
      {
        feature: 'Output content filtering',
        voscus: 'Built-in',
        competitors: true,
        details: 'Legacy guardrail functionality included where needed',
      },
    ],
    insight:
      'Output filtering and prompt guardrails tell you what an agent said it would do — not what it will actually do. That gap is where the real risk lives.',
    insightFollowup:
      'Voscus closes that gap by assessing impact before execution. The questions that matter are answered before anything runs: what does this action reach, who is affected, and does the scope justify proceeding without a human in the loop?',
  },
  comparison: {
    eyebrow: 'Feature Comparison',
    title: 'How Voscus Compares',
    description:
      'Voscus is purpose-built for pre-execution decision intelligence. Other tools focus on output filtering and content moderation. The distinction is fundamental.',
    featureNames: [
      'Pre-execution impact assessment',
      'Multi-system blast radius analysis',
      'Policy-as-code enforcement',
      'Human approval workflows',
      'Explainable audit trails',
      'Flexible enforcement (assess → approve → block)',
      'Output content filtering',
    ],
    competitors: [
      {
        name: 'Voscus',
        focus: 'Pre-execution decision intelligence',
        badge: true,
        features: {
          'Pre-execution impact assessment': true,
          'Multi-system blast radius analysis': true,
          'Policy-as-code enforcement': true,
          'Human approval workflows': true,
          'Explainable audit trails': true,
          'Flexible enforcement (assess → approve → block)': true,
          'Output content filtering': true,
        },
      },
      {
        name: 'LlamaGuard',
        focus: 'LLM response filtering',
        features: {
          'Pre-execution impact assessment': false,
          'Multi-system blast radius analysis': false,
          'Policy-as-code enforcement': false,
          'Human approval workflows': false,
          'Explainable audit trails': false,
          'Flexible enforcement (assess → approve → block)': false,
          'Output content filtering': true,
        },
      },
      {
        name: 'NeMo Guardrails',
        focus: 'LLM output moderation',
        features: {
          'Pre-execution impact assessment': false,
          'Multi-system blast radius analysis': false,
          'Policy-as-code enforcement': false,
          'Human approval workflows': false,
          'Explainable audit trails': false,
          'Flexible enforcement (assess → approve → block)': false,
          'Output content filtering': true,
        },
      },
      {
        name: 'Policy Layers',
        focus: 'Static rule enforcement',
        features: {
          'Pre-execution impact assessment': false,
          'Multi-system blast radius analysis': false,
          'Policy-as-code enforcement': false,
          'Human approval workflows': false,
          'Explainable audit trails': false,
          'Flexible enforcement (assess → approve → block)': false,
          'Output content filtering': true,
        },
      },
    ],
  },
  useCases: {
    eyebrow: 'Real-World Applications',
    title: 'Decision Intelligence for the Workflows That Can\'t Be Wrong',
    description:
      'From finance to healthcare to code generation, Voscus gives teams confidence to deploy AI agents in high-stakes workflows — because every action has been understood before it runs.',
    items: [
      {
        icon: 'trending',
        title: 'Finance & Trading',
        description:
          'AI agents executing trades, managing portfolios, or reconciling accounts. Assess impact before every transaction. Enforce risk limits through policy-as-code, not manual review.',
        highlights: ['Pre-execution transaction assessment', 'Policy-as-code risk limits', 'Approval workflows for high-value actions'],
      },
      {
        icon: 'health',
        title: 'Healthcare Admin',
        description:
          'Agents managing patient records, scheduling, and billing. Understand the downstream consequence of every data access before it occurs. Maintain HIPAA compliance deterministically.',
        highlights: ['Pre-access impact assessment', 'Deterministic compliance enforcement', 'Explainable audit trails'],
      },
      {
        icon: 'code2',
        title: 'Code Generation Agents',
        description:
          'Automated coding, PR creation, and infrastructure changes. Assess blast radius across production systems before any commit or deployment runs.',
        highlights: ['Pre-deployment impact assessment', 'Policy-as-code quality gates', 'Human approval for high-blast-radius changes'],
      },
      {
        icon: 'workflow',
        title: 'Enterprise Workflows',
        description:
          'Agents automating procurement, HR, or operations. Know what an action will actually affect — not just what the agent intends — before it proceeds.',
        highlights: ['Downstream consequence mapping', 'Spending and access policy-as-code', 'Approval routing with full context'],
      },
      {
        icon: 'message',
        title: 'Customer Support Agents',
        description:
          'Automated support with tool access. Assess impact before agents act on customer data, override preferences, or trigger account changes.',
        highlights: ['Pre-action impact assessment', 'Customer preference enforcement', 'Escalation with decision context'],
      },
    ],
  },
  cta: {
    title: 'Give Every Agent Action',
    accent: 'A Decision Before It Runs.',
    description:
      'Voscus is the decision intelligence layer for autonomous AI — assessing blast radius, applying policy-as-code, and routing for human approval before actions execute. Understand before acting.',
    trust: [
      { label: 'Early Access', value: 'Available' },
      { label: 'Integration Support', value: '24/7' },
      { label: 'Enforcement', value: 'Policy-as-Code' },
    ],
  },
} as const;

export type ComparisonFeatureName = (typeof landingContent.comparison.featureNames)[number];
