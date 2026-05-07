export const landingContent = {
  hero: {
    eyebrow: 'Action security for autonomous agents',
    title: 'Watch every action before it becomes an incident.',
    description:
      'Voscus monitors agent behavior across email, code, databases, and workflows. It calculates blast radius in real time so teams can stop risky actions before they spread.',
    streamItems: [
      ['14:32:05', 'Email agent requested 48,216 external recipients', 'review'],
      ['14:32:06', 'Blast radius mapped to CRM and billing contacts', 'mapped'],
      ['14:32:07', 'Send action blocked pending security approval', 'blocked'],
    ],
  },
  problem: {
    eyebrow: 'The Challenge',
    title: 'Autonomous Agents Can Act Faster Than You Can Watch',
    description:
      'Traditional guardrails scan prompts and responses. But agents do not just produce text - they execute actions. By the time you spot a problem, the damage is already happening.',
    risks: [
      {
        icon: 'mail',
        title: 'Email Agents',
        description: 'Send emails to wrong recipients, leak sensitive information, spam users',
      },
      {
        icon: 'code',
        title: 'Code Agents',
        description: 'Commit breaking changes, introduce vulnerabilities, delete repositories',
      },
      {
        icon: 'database',
        title: 'Data Agents',
        description: 'Access unauthorized databases, export sensitive records, corrupt data',
      },
      {
        icon: 'globe',
        title: 'API Agents',
        description: 'Make incorrect requests, drain budgets, trigger cascading failures',
      },
    ],
    insight:
      'As AI agents become more capable, they are deployed in workflows touching email, code, databases, and enterprise systems. A single bad agent decision can cascade across your entire infrastructure in milliseconds. You need visibility into what agents actually do - not just what they say they will do.',
  },
  product: {
    eyebrow: 'What Voscus Does',
    title: 'Action-level oversight for autonomous AI',
    description:
      'We do not scan prompts. We watch what agents actually do. Real-time monitoring, risk scoring, and enforcement - all built for autonomous agents operating across your enterprise systems.',
    features: [
      {
        icon: 'eye',
        title: 'Monitor Agent Actions',
        description:
          'Real-time visibility into what your agents are doing - every API call, file access, and system interaction.',
      },
      {
        icon: 'alert',
        title: 'Detect Risky Behavior',
        description:
          'Identify patterns that signal problems: unauthorized access attempts, unusual data volumes, policy violations.',
      },
      {
        icon: 'target',
        title: 'Calculate Blast Radius',
        description:
          'Understand the scope of impact before it spreads. What systems are affected? Who has access? How much data?',
      },
      {
        icon: 'file',
        title: 'Explainable Audit Trails',
        description:
          'Full provenance of every action. Why did the agent do this? What was the context? What went wrong?',
      },
      {
        icon: 'settings',
        title: 'Flexible Integration',
        description:
          'Start as an observability layer. Evolve into enforcement with blocking integrations as you gain confidence.',
      },
      {
        icon: 'check',
        title: 'Built for High-Risk Workflows',
        description:
          'Designed for finance ops, healthcare admin, code automation, and enterprise workflow agents.',
      },
    ],
    metrics: [
      { label: 'Agent Activity', value: '247', sublabel: 'Actions in last 24h', pulse: true },
      { label: 'Risk Score', value: '12', sublabel: 'Flagged actions', pulse: false },
      { label: 'Blast Radius', value: '3', sublabel: 'Systems impacted', pulse: false },
      { label: 'Blocked Actions', value: '8', sublabel: 'Prevented incidents', pulse: false },
    ],
  },
  whyVoscus: {
    eyebrow: 'Competitive Advantage',
    title: 'Built for What Is Coming, Not What Is Passing',
    description:
      'Traditional guardrails, policy layers, and LLM filters monitor text. Voscus monitors actions. There is a difference.',
    comparisons: [
      {
        feature: 'Focuses on agent actions',
        voscus: true,
        competitors: false,
        details: 'We monitor what agents actually do, not just what they say',
      },
      {
        feature: 'Real-time action monitoring',
        voscus: true,
        competitors: false,
        details: 'Visibility into email, files, code, APIs, and databases',
      },
      {
        feature: 'Blast radius analysis',
        voscus: true,
        competitors: false,
        details: 'Understand scope of impact across systems',
      },
      {
        feature: 'Enterprise workflow ready',
        voscus: true,
        competitors: false,
        details: 'Built for finance ops, code agents, admin automation',
      },
      {
        feature: 'Explainable audit trails',
        voscus: true,
        competitors: 'Limited',
        details: 'Complete provenance and context for every action',
      },
      {
        feature: 'Flexible enforcement',
        voscus: true,
        competitors: 'Limited',
        details: 'Start observing, evolve to blocking',
      },
      {
        feature: 'LLM prompt scanning',
        voscus: 'Built-in',
        competitors: true,
        details: 'Legacy guardrail functionality included',
      },
    ],
    insight:
      'Policy enforcement and prompt filters are necessary but not sufficient. They tell you what an agent said it would do, not what it actually did.',
    insightFollowup:
      'Voscus closes that gap by monitoring action execution in real time. We answer the questions that matter: What did the agent touch? What changed? Who was affected? How do we stop this from happening again?',
  },
  comparison: {
    eyebrow: 'Feature Comparison',
    title: 'How Voscus Compares',
    description:
      'Voscus is purpose-built for agent action monitoring. Other tools focus on text filtering. Here is what is different.',
    featureNames: [
      'Real-time action monitoring',
      'Multi-tool visibility (email, code, files, APIs, databases)',
      'Blast radius analysis',
      'Enterprise workflow support',
      'Explainable audit trails',
      'Flexible enforcement (observe -> block)',
      'Prompt filtering',
    ],
    competitors: [
      {
        name: 'Voscus',
        focus: 'Action-level AI agent monitoring',
        badge: true,
        features: {
          'Real-time action monitoring': true,
          'Multi-tool visibility (email, code, files, APIs, databases)': true,
          'Blast radius analysis': true,
          'Enterprise workflow support': true,
          'Explainable audit trails': true,
          'Flexible enforcement (observe -> block)': true,
          'Prompt filtering': true,
        },
      },
      {
        name: 'LlamaGuard',
        focus: 'LLM response filtering',
        features: {
          'Real-time action monitoring': false,
          'Multi-tool visibility (email, code, files, APIs, databases)': false,
          'Blast radius analysis': false,
          'Enterprise workflow support': false,
          'Explainable audit trails': false,
          'Flexible enforcement (observe -> block)': false,
          'Prompt filtering': true,
        },
      },
      {
        name: 'NeMo Guardrails',
        focus: 'LLM output moderation',
        features: {
          'Real-time action monitoring': false,
          'Multi-tool visibility (email, code, files, APIs, databases)': false,
          'Blast radius analysis': false,
          'Enterprise workflow support': false,
          'Explainable audit trails': false,
          'Flexible enforcement (observe -> block)': false,
          'Prompt filtering': true,
        },
      },
      {
        name: 'Policy Layers',
        focus: 'Static policy enforcement',
        features: {
          'Real-time action monitoring': false,
          'Multi-tool visibility (email, code, files, APIs, databases)': false,
          'Blast radius analysis': false,
          'Enterprise workflow support': false,
          'Explainable audit trails': false,
          'Flexible enforcement (observe -> block)': false,
          'Prompt filtering': true,
        },
      },
    ],
  },
  useCases: {
    eyebrow: 'Real-World Applications',
    title: 'Voscus Powers the Agents Your Business Trusts',
    description:
      'From finance to healthcare to code generation, Voscus gives teams confidence to deploy AI agents in high-stakes workflows.',
    items: [
      {
        icon: 'trending',
        title: 'Finance & Trading',
        description:
          'AI agents executing trades, managing portfolios, or reconciling accounts. Monitor every transaction. Catch order routing errors before they cost millions.',
        highlights: ['Transaction monitoring', 'Account access control', 'Risk limit enforcement'],
      },
      {
        icon: 'health',
        title: 'Healthcare Admin',
        description:
          'Agents managing patient records, scheduling, and billing. Ensure HIPAA compliance. Detect unauthorized data access.',
        highlights: ['Patient data protection', 'Audit trail compliance', 'Access control'],
      },
      {
        icon: 'code2',
        title: 'Code Generation Agents',
        description:
          'Automated coding, PR creation, and infrastructure changes. Stop agents from committing vulnerable code or breaking production.',
        highlights: ['Code quality gates', 'Security scanning', 'Deployment control'],
      },
      {
        icon: 'workflow',
        title: 'Enterprise Workflows',
        description:
          'Agents automating procurement, HR, or operations. Monitor spending. Control who has access to what systems.',
        highlights: ['Spending controls', 'Access governance', 'Approval workflows'],
      },
      {
        icon: 'message',
        title: 'Customer Support Agents',
        description:
          'Automated support with tool access. Ensure agents only give correct information and never override customer preferences.',
        highlights: ['Response accuracy', 'Customer preference enforcement', 'Escalation control'],
      },
    ],
  },
  cta: {
    title: 'Secure Your Agentic Workflows',
    accent: 'Before They Scale',
    description:
      'As autonomous AI agents become more capable and more widely deployed, oversight becomes critical. Voscus gives you action-level visibility and control before incidents happen.',
    trust: [
      { label: 'Early Access', value: 'Available' },
      { label: 'Integration Support', value: '24/7' },
      { label: 'Security', value: 'Enterprise-Grade' },
    ],
  },
} as const;

export type ComparisonFeatureName = (typeof landingContent.comparison.featureNames)[number];
