import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownLeft, ArrowUpRight, Receipt, Send, Wallet } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Panel, PanelBody, PanelHeader } from '@/components/ui/Panel';
import { ButtonLink } from '@/components/ui/Button';
import { Segmented } from '@/components/ui/Controls';
import { ErrorState, Skeleton } from '@/components/ui/Feedback';
import { StatGrid, StatTile } from '@/components/data/StatTile';
import { AccountPicker } from '@/components/data/AccountPicker';
import { TransactionLedger } from '@/components/data/TransactionLedger';
import { TransactionDrawer } from '@/components/data/TransactionDrawer';
import { AmountRoll } from '@/components/brand/AmountRoll';
import { BalanceArea } from '@/components/charts/BalanceArea';
import { CategoryDonut } from '@/components/charts/CategoryDonut';
import { ChartLegend } from '@/components/charts/ChartFrame';
import { useApi } from '@/hooks/useApi';
import { useAuth } from '@/providers/AuthProvider';
import { useCurrency } from '@/providers/CurrencyProvider';
import { api } from '@/mocks/api';
import { cn } from '@/lib/cn';
import { maskAccount } from '@/lib/masking';
import { ACCOUNT_TYPES } from '@/lib/taxonomy';
import { RANGE_PRESETS, fmtRelative, type RangePreset } from '@/lib/dates';
import type { Transaction } from '@/types/domain';

/** The dashboard asks about the recent past, so the long presets stay on Analytics. */
const PRESETS = RANGE_PRESETS.filter((preset) =>
  ['7d', '30d', '90d', '12m'].includes(preset.id),
).map((preset) => ({ value: preset.id, label: preset.label }));

function greeting(hour: number): string {
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

/**
 * A reload after the first one dims what is on screen instead of blanking it.
 * Changing the scope should feel like the same page answering again, not a new
 * page arriving, so the old figures stay legible until the new ones land.
 */
const stale = (request: { loading: boolean; initialLoading: boolean }) =>
  request.loading && !request.initialLoading && 'opacity-55';


  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title={`${greeting(new Date().getHours())}, ${user?.name.split(' ')[0] ?? 'there'}`}
        description={
          user
            ? `${user.role} · ${user.organisation}. Last signed in ${fmtRelative(user.lastSignInAt)}.`
            : undefined
        }
        actions={
          <>
            <ButtonLink to="/transactions" variant="outline" icon={<Receipt className="size-4" />}>
              Statement
            </ButtonLink>
            <ButtonLink to="/transfers" variant="primary" icon={<Send className="size-4" />}>
              New transfer
            </ButtonLink>
          </>
        }
      />

      {/* Scope */}


      {summary.error && !stats ? (
        <Panel className="mb-4">
          <ErrorState
            title="The overview did not load"
            error={summary.error}
            onRetry={summary.refetch}
          />
        </Panel>
      ) : (
        <StatGrid className={cn('mb-4 transition-opacity duration-200', stale(summary))}>
          <StatTile
            label="Total balance"
            loading={summary.initialLoading}
            icon={<Wallet className="size-4" />}
            value={<AmountRoll minor={stats?.totalBalanceMinor ?? 0} />}
            hint={
              stats ? (
                <>
                  {money(stats.availableMinor)} available
                  {stats.pendingMinor > 0 ? ` · ${money(stats.pendingMinor)} held` : ''}
                </>
              ) : null
            }
          />
          <StatTile
            label={`Money in · ${periodLabel}`}
            loading={summary.initialLoading}
            icon={<ArrowDownLeft className="size-4" />}
            value={<AmountRoll minor={stats?.incomeMinor ?? 0} />}
            delta={stats?.incomeChangePct}
          />
          <StatTile
            label={`Money out · ${periodLabel}`}
            loading={summary.initialLoading}
            icon={<ArrowUpRight className="size-4" />}
            value={<AmountRoll minor={stats?.expenseMinor ?? 0} />}
            delta={stats?.expenseChangePct}
            invertDelta
          />
          <StatTile
            label={`Transactions · ${periodLabel}`}
            loading={summary.initialLoading}
            icon={<Receipt className="size-4" />}
            value={(stats?.transactionCount ?? 0).toLocaleString('en-US')}
            delta={stats?.volumeChangePct}
          />
        </StatGrid>
      )}

      {/* Position */}


      {/* Activity */}
\

      <TransactionDrawer
        transaction={selected}
        onClose={() => setSelected(null)}
        accountName={accountName}
      />
    </>
  );
}
