import mongoose from 'mongoose';

const featureFlagSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            trim: true,
        },
        enabled: {
            type: Boolean,
            default: false,
        },
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization',
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    },
);

featureFlagSchema.index({ key: 1, organizationId: 1 }, { unique: true });
